## 关掉 create-react-app 自带的 eslint

- npm run eject
- package.json eslintConfig 中添加如下代码

```json
"rules": {
      "no-under": "off",
      "no-restricted-global": "off",
      "no-unusewd-vars": "off"
    }
```

## React 函数组件必须大写开头 小写视为原生 DOM 标签
