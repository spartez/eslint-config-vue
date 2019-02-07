module.exports = {
    env: {
        node: true
    },
    extends: ['plugin:vue/recommended', 'airbnb-base'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'comma-dangle': ['error', 'never'],
        'vue/html-indent': ['error', 4, { alignAttributesVertically: true }],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                multiline: 'never'
            }
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 3,
                multiline: {
                    max: 3,
                    allowFirstLine: true
                }
            }
        ],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 1
            }
        ]
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ],
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']]
            }
        }
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
