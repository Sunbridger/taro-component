enum Typekey {
    'left' = 'left',
    'current' = 'current',
    'right' = 'right',
}
type ObjInterface = {
    [P in Typekey]: string;
};

export default {
    props: {
        items: {
            type: Array,
            default: (): any[] => [],
        },
        current: {
            type: Number,
            default: 0,
        },
        canClick: {
            type: Boolean,
            default: false,
        },
    },
    data(): any {
        return {
            width: '',
        };
    },
    mounted() {
        this.getWidth();
    },
    methods: {
        clickFn(index: number): void {
            if (this.canClick && index !== this.current) {
                this.$emit('update:current', index);
                this.$emit('change', index);
            }
        },
        getIconSrc(index: number): string {
            const obj: ObjInterface = {
                left:
                    'https://img.souche.com/f2e/0e621e525028fac11d3674d8bcdc208e.png',
                current:
                    'https://img.souche.com/f2e/1d7ae0392e95172d46e59735aa55ae0b.png',
                right:
                    'https://img.souche.com/f2e/0ee552b529c1d7f4032565da2eac7f7f.png',
            };
            const nowKey: string =
                index < this.current
                    ? Typekey['left']
                    : index > this.current
                    ? Typekey['right']
                    : Typekey['current'];
            return obj[nowKey];
        },
        getWidth(): void {
            this.width = `${100 - Math.ceil(100 / this.items.length / 2) * 2}%`;
        },
    },
};
