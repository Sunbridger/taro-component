export default {
    props: {
        className: {
            type: [String, Object, Array],
            default: '',
        },
        customStyle: {
            type: [String, Object, Array],
            default: '',
        },
    },
    computed: {
        actualClassName(): string {
            if (typeof this.className === 'string') {
                return this.className;
            } else if (this.className instanceof Array) {
                return this.className.join(' ');
            } else if (
                typeof this.className === 'object' &&
                Object.keys(this.className).length > 0
            ) {
                return Object.keys(this.className)
                    .filter(i => this.className[i])
                    .join(' ');
            }

            return '';
        },
    },
};
