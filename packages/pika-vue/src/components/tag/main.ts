import { enumValidate } from '../../utils/common';

enum TYPE_CLASS {
    primary = 'primary',
    default = 'default',
    'active-default' = 'active-default',
    'active-primary' = 'active-primary',
    'active-fill' = 'active-fill',
    'status-waring' = 'status-waring',
    'status-success' = 'status-success',
    'status-danger' = 'status-danger',
}

export default {
    props: {
        type: {
            type: String,
            validator: enumValidate(TYPE_CLASS),
            default: TYPE_CLASS.default,
        },
        filled: {
            type: Boolean,
            default: false,
        },
        disable: {
            type: Boolean,
            default: false,
        },
    },
    data(): any {
        return {};
    },
};
