const { PREFIX, firstUppercase } = require('./utils');
const prefix = PREFIX.toLocaleLowerCase();

const vueTemplate = moduleName => {
    let name = firstUppercase(moduleName);

    return `<template>
    <view class="${prefix}-${moduleName}"></view>
</template>

<script>
import '../../style/components/${moduleName}.css';
import ${name} from './main';

export default {
    name: '${PREFIX}${name}',
    components: {},
    mixins: [${name}],
};
</script>
`;
};

const tsTemplate = () => {
    return `export default {
    props: {},
    data() {
        return {};
    },
};
`;
};

const styleTemplate = moduleName => {
    return `@import '../common/varibles.scss';

.${prefix}-${moduleName} {
}
`;
};

module.exports = {
    vueTemplate,
    tsTemplate,
    styleTemplate,
};
