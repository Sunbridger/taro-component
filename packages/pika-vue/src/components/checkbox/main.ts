export default {
    model: {
        prop: 'selectedList',
        event: 'change',
    },
    props: {
        selectedList: {
            type: Array,
            default: (): any => [],
        },
        options: {
            type: Array,
            default: (): any => [],
        },
        checkIcon: {
            type: String,
            default: 'check',
        },
        unCheckIcon: {
            type: String,
            default: '',
        },
        preSetIcon: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        changeSelected(value): void {
            const selected: string[] = this.selectedList;
            const index = selected.indexOf(value);
            if (index === -1) {
                selected.push(value);
            } else {
                selected.splice(index, 1);
            }
            this.$emit('change', selected);
        },
    },
};
