module.exports = {
    'env': {
        'node': true,
        'browser': true,
        'es6': true,
        'jest': true
    },
    'plugins': [
        'react'
    ],
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'rules': {
        'indent': ['error', 2],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-console': [
            'error', {
                allow: [
                    'error'
                ]
            }
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/forbid-prop-types': [
            'error', { }
        ],
        'react/no-unused-prop-types': [
            'error', { }
        ],
        'react/jsx-no-duplicate-props': [
            'error', { }
        ],
        'react/jsx-props-no-multi-spaces': 'error',
        'react/require-default-props': [
            'error', {
                'forbidDefaultForRequired': true
            }
        ]
    }
}