import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import { uglify } from "rollup-plugin-uglify";
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.ts',   // 修改入口文件后缀为ts
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: [  // 不打包的依赖
    '@tarojs/taro',
    '@tarojs/taro-weapp',
		'@tarojs/components'
  ],
	plugins:[
    resolve(),  // 解析node模块(rollup默认不支持)
    commonjs({  // rollup-plugin-node-resolve 插件可以解决 ES6模块的查找导入，但是npm中的大多数包都是以CommonJS模块的形式出现的，所以需要使用这个插件将CommonJS模块转换为 ES2015 供 Rollup 处理
      include: 'node_modules/**', // 将node_modules中的commonjs转换为es module
      exclude: [],
    }),
    babel({  // 运行babel配置
      exclude: '**/node_modules/**'   // 不打包node_modules中的文件
    }),
		typescript(),  // typescript支持
		uglify(),  // 压缩
		filesize() // 打印文件大小
  ],
}
