# compat-god

taro封装。

## 2022-02-15

- 将 taro 作为 peerdependencies 引入，不显式安装，直接导出 @tarojs/taro 和 @tarojs/components 下面的所有成员。
- 解决组件只能从 @tarojs/components 引入的问题
  - 修改taro-transformer-wx下的JSXOpeningElement判断
- 需要忽略 react/react-in-jsx-scope 规则，否则jsx会报错： 'Taro' must be in scope when using JSX
- 需要继承API/组件的类型声明

