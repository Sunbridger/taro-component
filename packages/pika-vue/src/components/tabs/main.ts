import { enumValidate } from '../../utils/common';
import Taro from '@tarojs/taro';

enum DirctionEnum {
    horizontal = 'horizontal',
    vertical = 'vertical',
}

export default {
    model: {
        prop: 'current',
        event: 'change',
    },
    provide(): any {
        return {
            tabs: this,
        };
    },
    props: {
        // Tab 方向
        tabDirection: {
            type: String,
            validator: enumValidate(DirctionEnum),
            default: DirctionEnum.horizontal,
        },
        // tab 高度, 在设置为垂直方向时需要设置
        height: {
            type: Number,
            default: 200,
        },
        // 当选中的索引
        current: {
            type: Number,
            default: 0,
        },
        // 是否滚动, 如果不滚动会被隐藏
        scroll: {
            type: Boolean,
            default: false,
        },
        // 是否支持手势滑动切换内容页, 为垂直方向时不支持
        swipeable: {
            type: Boolean,
            default: true,
        },
        // 是否开启切换动画
        animated: {
            type: Boolean,
            default: true,
        },
        // tab 列表
        tabList: {
            type: Array,
            default: (): any => [],
        },
    },
    data(): any {
        return {
            uid: '0',
            tagsRef: [],
            tagsBox: 0,
            itemHeight: 44,
            heightArr: [],
            underLineStyle: {},
            ableChange: true,
            scrollLeft: 0,
            scrollTop: 0,
        };
    },
    methods: {
        // 到下一个标签
        nextTag(): void {
            if (this.swipeable) {
                const nextIndex = Math.min(
                    this.current + 1,
                    this.tabList.length - 1
                );
                this.selectedItem(nextIndex);
            }
        },
        // 到上一个标签
        preTag(): void {
            if (this.swipeable) {
                const preIndex = Math.max(this.current - 1, 0);
                this.selectedItem(preIndex);
            }
        },
        // 点击跳转标签
        selectedItem(value): void {
            if (this.ableChange) {
                this.$emit('change', value);
            }
        },
        // 获取各标签宽度
        getWidthList(): any {
            if (!this.$refs.tabs.uid) {
                return;
            }
            this.uid = this.$refs.tabs.uid;
            const query = Taro.createSelectorQuery();
            const p1 = new Promise(resolve => {
                query
                    .selectAll(`#${this.uid} .pk-tabs__list-item`)
                    .boundingClientRect()
                    .exec(ret => {
                        resolve(ret[0]);
                    });
            });

            const p2 = new Promise(resolve => {
                query
                    .select(`#${this.uid} .pk-tabs__list`)
                    .boundingClientRect()
                    .exec(ret => {
                        resolve(ret[1]);
                    });
            });

            return Promise.all([p1, p2]).then(([tags, tagbox]: any) => {
                this.tagsRef = tags.map((i: any) => ({
                    left: i.left - tagbox.left,
                    width: i.width,
                }));
                this.totalWidth = tagbox.width;
            });
        },
        // 计算居中和下划线的数据
        setUnderLine(): void {
            const tag = this.tagsRef[this.current];

            this.underLineStyle = {
                width: tag.width + 'px',
                left: tag.left + 'px',
            };

            if (this.scroll) {
                const scroll = Math.max(
                    tag.left - (this.totalWidth - tag.width) / 2,
                    0
                );
                this.scrollLeft = scroll;
            }
        },
        setUnderLineVertical(): void {
            const top = this.current * this.itemHeight;
            this.underLineStyle = {
                top: top + 'px',
            };

            if (this.scroll) {
                const scroll = Math.max(
                    top - (this.height - this.itemHeight) / 2,
                    0
                );
                this.scrollTop = scroll;
            }
        },
        // 切换标签
        initTab(): void {
            // 防抖处理
            this.ableChange = false;
            if (!this.isVertical) {
                this.setUnderLine();
            } else {
                this.setUnderLineVertical();
            }
            if (this.animated) {
                setTimeout(() => {
                    this.ableChange = true;
                }, 300);
            } else {
                this.ableChange = true;
            }
        },
    },
    mounted(): void {
        Taro.nextTick(async () => {
            await this.getWidthList();
            this.initTab();
        });
    },
    watch: {
        current(newValue, oldValue): void {
            if (newValue !== oldValue) {
                this.initTab();
            }
        },
        tabList(): void {
            this.initTab();
        },
    },
    computed: {
        isVertical(): boolean {
            return this.tabDirection === DirctionEnum.vertical;
        },
        tabListMargin(): string {
            if (this.tabList.length < 3) {
                return '0 190rpx';
            } else {
                return '0 46rpx';
            }
        },
    },
};
