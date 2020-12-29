const fs = require('fs');
const path = require('path');

const componentsPath = path.resolve(__dirname, '../src/style/components');
const indexPath = path.resolve(__dirname, '../src/style/components/index.scss');

function generateIndexFile() {
    try {
        let data = fs.readdirSync(componentsPath);

        const isNotIndex = name => name !== 'index.scss';
        let str = `/**
 * generate by ./config/build-style.js
 */
`;

        data.filter(isNotIndex).forEach(file => {
            str += `@import './${file}';\n`;
        });

        fs.writeFileSync(indexPath, str, { encoding: 'utf8' });
        // eslint-disable-next-line no-console
        console.log('generator style/components/index.scss success');
    } catch (error) {
        console.error(error);
    }
}

generateIndexFile();
