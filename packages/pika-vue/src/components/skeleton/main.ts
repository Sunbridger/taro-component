import { enumValidate } from '../../utils/common';

enum AvatarShapeType {
    round = 'round',
    squzre = 'squzre',
}

export default {
    props: {
        avatar: {
            type: Boolean,
            default: false,
        },
        avatarShape: {
            type: String,
            default: AvatarShapeType.round,
            validator: enumValidate(AvatarShapeType),
        },
        avatarSize: {
            type: [String, Number],
            default: 32,
        },
        rowWidth: {
            type: Array,
            default: (): any => ['40%', '100%', '100%', '60%'],
        },
        animation: {
            type: Boolean,
            default: true,
        },
    },
};
