export default {
    inject: ['tabs'],
    props: {
        index: {
            type: Number,
            required: true,
        },
    },
    data(): any {
        return {
            hidden: true,
            enterLeft: false,
            leaveLeft: false,
            enterRight: false,
            leaveRight: false,

            touchDotX: 0,
            touchDotY: 0,
            interval: undefined,
            time: 0,
        };
    },
    watch: {
        'tabs.current': {
            handler(newValue, oldValue): void {
                if (newValue === oldValue) return;

                if (!this.tabs.animated) {
                    if (this.index === newValue) {
                        this.hidden = false;
                    } else {
                        this.hidden = true;
                    }
                    return;
                } else {
                    // 当前组件为显示组件
                    if (this.index === newValue) {
                        // enter
                        this.hidden = false;
                        if (oldValue > newValue) {
                            this.enterLeft = true;
                        } else {
                            this.enterRight = true;
                        }
                        setTimeout(() => {
                            this.enterLeft = false;
                            this.enterRight = false;
                        }, 50);
                    } else {
                        if (!this.hidden) {
                            // leave
                            if (oldValue > newValue) {
                                this.leaveRight = true;
                            } else {
                                this.leaveLeft = true;
                            }
                            setTimeout(() => {
                                this.leaveLeft = false;
                                this.leaveRight = false;
                                this.hidden = true;
                            }, 500);
                        }
                    }
                }
            },
            immediate: true,
        },
    },
    methods: {
        touchStart(e): void {
            this.touchDotX = e.touches[0].pageX; // 获取触摸时的原点
            this.touchDotY = e.touches[0].pageY;
            // 使用js计时器记录时间
            this.interval = setInterval(function () {
                this.time++;
            }, 100);
        },
        touchEnd(e): void {
            const touchMoveX = e.changedTouches[0].pageX;
            const touchMoveY = e.changedTouches[0].pageY;
            const tmX = touchMoveX - this.touchDotX;
            const tmY = touchMoveY - this.touchDotY;
            if (this.time < 20) {
                const absX = Math.abs(tmX);
                const absY = Math.abs(tmY);
                if (absX > 2 * absY) {
                    if (!this.tabs.isVertical) {
                        if (tmX < 0) {
                            this.tabs.nextTag();
                        } else {
                            this.tabs.preTag();
                        }
                    }
                }
            }
            clearInterval(this.interval); // 清除setInterval
            this.time = 0;
        },
    },
};
