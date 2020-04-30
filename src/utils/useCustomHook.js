import { useState, useEffect } from 'react';

/**
 * 自定义Hook，页面是否加载完成，由参数是否全部为null控制
 * @function useIsLoaded
 * @param []   由依赖项构成的数组
 * @returns   true   加载完成
 *            false  加载中
 */
export function useIsLoaded(...values) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(values.every(item => item !== null));
  }, values)
  return isLoaded;
}