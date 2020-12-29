import React, { Component } from 'react';
import { PkUploaderProps, File } from './interface';
import { Image, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { uuid } from '../../helper/common';

interface MatrixFile extends Partial<File> {
    type: 'blank' | 'btn';
    uuid: string;
}

// 生成 jsx 二维矩阵
const generateMatrix = (
    files: MatrixFile[],
    col: number,
    showAddBtn: boolean
) => {
    const matrix: Array<MatrixFile>[] = [];
    const length = showAddBtn ? files.length + 1 : files.length;
    const row = Math.ceil(length / col);
    for (let i = 0; i < row; i++) {
        if (i === row - 1) {
            // 最后一行数据加上添加按钮
            const lastArr = files.slice(i * col);
            if (lastArr.length < col) {
                if (showAddBtn) {
                    lastArr.push({ type: 'btn', uuid: uuid() });
                }
                // 填补剩下的空列
                for (let j = lastArr.length; j < col; j++) {
                    lastArr.push({ type: 'blank', uuid: uuid() });
                }
            }
            matrix.push(lastArr);
        } else {
            matrix.push(files.slice(i * col, (i + 1) * col));
        }
    }
    return matrix;
};

const ENV = Taro.getEnv();

export default class PkUploader extends Component<PkUploaderProps> {
    public static defaultProps: PkUploaderProps;

    private chooseFile = (): void => {
        const {
            files = [],
            multiple,
            count,
            sizeType,
            sourceType,
        } = this.props;
        const filePathName =
            ENV === Taro.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles';
        // const count = multiple ? 99 : 1
        const params: any = {};
        if (multiple) {
            params.count = 99;
        }
        if (count) {
            params.count = count;
        }
        if (sizeType) {
            params.sizeType = sizeType;
        }
        if (sourceType) {
            params.sourceType = sourceType;
        }
        Taro.chooseImage(params)
            .then(res => {
                const targetFiles = res.tempFilePaths.map((path, i) => ({
                    url: path,
                    file: res[filePathName][i],
                }));
                const newFiles = files.concat(targetFiles);
                this.props.onChange(newFiles, 'add');
            })
            .catch(this.props.onFail);
    };

    private handleImageClick = (idx: number): void => {
        this.props.onImageClick?.(idx, this.props.files[idx]);
    };

    private handleRemoveImg = (idx: number): void => {
        const { files = [] } = this.props;
        if (ENV === Taro.ENV_TYPE.WEB) {
            window.URL.revokeObjectURL(files[idx].url);
        }
        const newFiles = files.filter((_, i) => i !== idx);
        this.props.onChange(newFiles, 'remove', idx);
    };

    public render(): JSX.Element {
        const {
            className,
            customStyle,
            files,
            mode,
            length = 4,
            showAddBtn = true,
        } = this.props;
        const rowLength = length <= 0 ? 1 : length;
        // 行数
        const matrix = generateMatrix(
            files as MatrixFile[],
            rowLength,
            showAddBtn
        );
        const rootCls = classNames('pk-image-picker', className);

        return (
            <View className={rootCls} style={customStyle}>
                {matrix.map((row, i) => (
                    <View className='pk-image-picker__flex-box' key={i + 1}>
                        {row.map((item, j) =>
                            item.url ? (
                                <View
                                    className='pk-image-picker__flex-item'
                                    key={i * length! + j}
                                >
                                    <View className='pk-image-picker__item'>
                                        <View
                                            className='pk-image-picker__remove-btn'
                                            onClick={this.handleRemoveImg.bind(
                                                this,
                                                i * length! + j
                                            )}
                                        />
                                        <Image
                                            className='pk-image-picker__preview-img'
                                            mode={mode}
                                            src={item.url}
                                            onClick={this.handleImageClick.bind(
                                                this,
                                                i * length! + j
                                            )}
                                        />
                                    </View>
                                </View>
                            ) : (
                                <View
                                    className='pk-image-picker__flex-item'
                                    key={i * length! + j}
                                >
                                    {item.type === 'btn' && (
                                        <View
                                            className='pk-image-picker__item pk-image-picker__choose-btn'
                                            onClick={this.chooseFile}
                                        >
                                            <View className='add-bar' />
                                            <View className='add-bar' />
                                        </View>
                                    )}
                                </View>
                            )
                        )}
                    </View>
                ))}
            </View>
        );
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
PkUploader.defaultProps = {
    className: '',
    customStyle: '',
    files: [],
    mode: 'aspectFill',
    showAddBtn: true,
    multiple: false,
    length: 4,
    // onChange: () => {},
    // onImageClick: () => {},
    // onFail: () => {},
};
