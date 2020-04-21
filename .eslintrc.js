module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys": "error",
        // 禁止出现重复的 case 标签
        "no-duplicate-case": "error",
        // 禁止出现空语句块,允许catch出现空语句
        "no-empty": ["error", { "allowEmptyCatch": true }],
        // 禁止对 catch 子句的参数重新赋值
        "no-ex-assign": "error",
        // 禁止不必要的布尔转换
        "no-extra-boolean-cast": "error",
        // 禁止不必要的分号
        "no-extra-semi": "error",
        // 强制所有控制语句使用一致的括号风格
        "curly": "error"
    },
    "settings":{
        "react":{
            "version": "detect"
        }
    }
};