export default {
    props: {
        icon: {
            type: String,
        },
        text: {
            type: String,
        },
        textStyle: {
            type: Object,
            default: (): any => ({}),
        },
        duration: {
            type: [Number, String],
            default: 10,
        },
        scroll: {
            type: Boolean,
            default: false,
        },
        prefixIcon: {
            type: String,
        },
    },
};
