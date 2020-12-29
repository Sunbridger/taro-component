import { ImageProps } from '@tarojs/components/types/Image';
import { PkComponent } from '../button/interface';

export type Name =
    | 'resize' // 图片缩放
    | 'circle' // 图片裁剪-内切圆
    | 'indexcrop' // 图片裁剪-索引切割
    | 'crop' // 图片裁剪-自定义裁剪
    | 'rounded-corners' // 图片裁剪-圆角矩形
    | 'rotate' // 图片旋转-旋转
    | 'auto-orient' // 图片旋转-自适应方向
    | 'blur' // 图片效果-模糊效果
    | 'bright' // 图片效果-亮度
    | 'contrast' // 图片效果-对比度
    | 'sharpen' // 图片效果-锐化
    | 'format' // 格式转换-格式转换
    | 'interlace' // 格式转换-渐进显示
    | 'quality' // 格式转换-质量变换
    | 'watermark' // 图片水印
    | 'average-hue' // 获取图片信息-获取图片主色调
    | 'info'; // 获取图片信息-获取信息
export type Params =
    | string
    | { [key: string]: string }
    | Array<
          | string
          | {
                key: string;
                value: string;
            }
      >;
export type Actions =
    | string
    | { [name: Name]: Params }
    | Array<
          | string
          | {
                name: Name;
                params: Params;
            }
      >;
export interface PkImageProps extends PkComponent, ImageProps {
    actions?: Actions; // oss 功能
    // mode?:
    //     | 'aspectFill' // 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
    //     | 'aspectFit' // 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来
    //     | 'bottom' // 裁剪模式，不缩放图片，只显示图片的底部区域
    //     | 'bottom left' // 裁剪模式，不缩放图片，只显示图片的左下边区域
    //     | 'bottom right' // 裁剪模式，不缩放图片，只显示图片的右下边区域
    //     | 'center' // 裁剪模式，不缩放图片，只显示图片的中间区域
    //     | 'heightFix' // 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
    //     | 'left' // 裁剪模式，不缩放图片，只显示图片的左边区域
    //     | 'right' // 裁剪模式，不缩放图片，只显示图片的右边区域
    //     | 'scaleToFill' // 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
    //     | 'top' // 裁剪模式，不缩放图片，只显示图片的顶部区域
    //     | 'top left' // 裁剪模式，不缩放图片，只显示图片的左上边区域
    //     | 'top right' // 裁剪模式，不缩放图片，只显示图片的右上边区域
    //     | 'widthFix'; // 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
    onClick?: (e: CommonEvent) => void;
}
