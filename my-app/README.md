# React 版本后台前端脚手

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

## antd Menu.SubMenu 在点击子 Item 的时候自动就收回去了

## 怎么为路由添加类似 vue keepalive 效果

## 我在 order index export default {OrderInfo} 在 routes index 引入 import {} 无效
