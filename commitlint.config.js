module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-case': [0],
        'type-empty': [2, 'never'],
        'subject-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'test',
                'chore',
                'perf',
                'revert',
                'WIP',
            ],
        ],
    },
};
