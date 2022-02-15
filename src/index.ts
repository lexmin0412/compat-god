import {
  useState,
	useEffect,
  useCallback,
  usePageScroll,
  usePullDownRefresh,
} from '@tarojs/taro'
import Taro from '@tarojs/taro-weapp'  // 运行时走的是对应平台如 @tarojs/taro-weapp 的 Taro，只有这里的才会有对应平台的api，所以不要从 @tarojs/taro 中引入。

const compatGodNav = (info) => {
	console.log('compatGoddNav', info)
}

export {
  useState,
	useEffect,
  useCallback,
  usePageScroll,
  usePullDownRefresh,
	compatGodNav
}

export default Taro
