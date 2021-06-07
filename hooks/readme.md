# 累计常用的 hooks

最容易搞混的是什么时候使用 hook，
封装 hook 和封装 component 他们之前的界限是什么

**逻辑复用**
当如果想要复用一个函数，大部分是 ui 组件的时候，不推荐自动 hooks，相反是 components

## 生命周期类

- useMount  
  **组件 mount 时 执行**
- useUnMount  
  **组件 unMount 时 执行**

## 状态管理

- useBoonlean  
  **常用于管理一些组件 如 checkbox 等需要 boonlean 值的组件**

## localStorage

- useLocalStorage  
  **用于管理 localStorage**

```js
const [storage, setStorage] = useLocalStorage("key", "seteValue")
```
