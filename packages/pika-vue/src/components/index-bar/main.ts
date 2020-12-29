import { ITouchEvent } from '@tarojs/components';
import Taro from '@tarojs/taro';

export default {
    props: {
        animation: {
            type: Boolean,
            default: false,
        },
        isVibrate: {
            type: Boolean,
            default: true,
        },
        isShowToast: {
            type: Boolean,
            default: true,
        },
        topKey: {
            type: String,
            default: '',
        },
        list: {
            type: Array,
            default: (): any[] => [],
        },
    },
    data(): any {
        return {
            currentIndex: 0,
            toastShow: false,
            uid: '',
            topArr: [],
            menuHeight: 0, // 菜单高度
            startTop: 0, // 菜单距离顶部的距离
            itemHeight: 0, // 单个项目的高度
        };
    },
    methods: {
        onClick(val): void {
            this.$emit('click', val);
        },
        initData(): void {
            Taro.nextTick(async () => {
                await this.getTopList();
            });
        },
        getTopList(): Promise<any> {
            if (!this.$refs.indexbar.uid) {
                return;
            }

            this.uid = this.$refs.indexbar.uid;
            const query = Taro.createSelectorQuery();

            const p1 = new Promise(resolve => {
                query
                    .selectAll(`#${this.uid} .pk-index-bar__group`)
                    .boundingClientRect()
                    .exec(ret => {
                        this.topArr = ((ret[0] as unknown) as any[]).map(
                            i => i.top
                        );
                        // 如果传了topKey, topKey的top值为0
                        if (this.topKey) {
                            this.topArr.unshift(0);
                        }
                        resolve();
                    });
            });

            const p2 = new Promise(resolve => {
                // 获取索引菜单的相关数据
                query
                    .select(`#${this.uid} .pk-index-bar__indexes`)
                    .boundingClientRect()
                    .exec(ret => {
                        this.menuHeight = ret[1].height;
                        this.startTop = ret[1].top;
                        const itemLength = this.keys.length;
                        this.itemHeight = Math.floor(
                            this.menuHeight / itemLength
                        );
                        resolve();
                    });
            });

            return Promise.all([p1, p2]);
        },
        handleTouchMove(event: ITouchEvent): void {
            event.stopPropagation();
            event.preventDefault();
            this.toastShow = true;

            const pageY = event.touches[0].pageY;
            const index = Math.floor((pageY - this.startTop) / this.itemHeight);
            if (
                index >= 0 &&
                index < this.keys.length &&
                this.currentIndex !== index
            ) {
                this.currentIndex = index;

                if (this.isVibrate) {
                    Taro.vibrateShort();
                }
            }
        },
        handleTouchEnd(event: ITouchEvent): void {
            event.stopPropagation();
            event.preventDefault();
            setTimeout(() => {
                this.toastShow = false;
            }, 500);
        },
        jumpClick(index: number): void {
            this.toastShow = true;
            this.currentIndex = index;
            if (this.isVibrate) {
                Taro.vibrateShort();
            }
        },
        jumpToKey(key: string): void {
            const index = this.keys.indexOf(key);
            if (index === -1) {
                this.currentIndex = 0;
            } else {
                this.toastShow = true;
                this.currentIndex = index;
                setTimeout(() => {
                    this.toastShow = false;
                }, 500);
            }
        },
    },
    mounted(): void {
        this.initData();
        this.$on('jumpToKey', this.jumpToKey);
    },
    computed: {
        keys(): string[] {
            const keysList: any[] = this.list.map(i => i.key);
            if (this.topKey) {
                keysList.unshift(this.topKey);
            }
            return keysList;
        },
    },
};
