module.exports = {
    env: {
        node: true
    },
    extends: ['plugin:vue/recommended', 'airbnb-base'],
    rules: {
        // styling
        'max-len': [
            'warn',
            160,
            4,
            {
                ignoreUrls: true,
                ignoreTemplateLiterals: true
            }
        ],
        indent: [
            'error', 
            4
        ],
        'comma-dangle': [
            'error',
            'never'
        ],

        // best practices
        'no-console': process.env.NODE_ENV === 'production' 
            ? [
                'error', 
                { 
                    allow: ['warn', 'error'] 
                }
            ] 
            : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' 
            ? 'error' 
            : 'off',
        'no-param-reassign': ['error', { props: false }],

        // VueJS rules
        'vue/html-indent': [
            'error', 
            4, 
            { 
                alignAttributesVertically: true 
            }
        ],
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
        ],
        'vue/html-closing-bracket-spacing': 'off',
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
        'import/resolver': 'webpack'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
