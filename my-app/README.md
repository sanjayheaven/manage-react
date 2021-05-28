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

##
