/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'
import { useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'
import type { Atom } from 'jotai'

/**
 * 创建一个 Jotai 原子（Atom）的选择器 Hook。
 *
 * @template T - 原子状态的类型
 * @param {Atom<T>} atom - 要创建选择器的原子对象
 * @returns {function(selector: function(a: T) => any, deps: any[] = [])} - 选择器 Hook
 *
 * @example
 * // 创建一个状态为 { count: 0 } 的原子
 * const countAtom = atom({ count: 0 });
 *
 * // 使用 createAtomSelector 创建一个选择器 Hook
 * const useCountSelector = createAtomSelector(countAtom);
 *
 * // 在组件中使用选择器 Hook，获取 count 的值
 * const MyComponent = () => {
 *   const countValue = useCountSelector((state) => state.count);
 *   return <div>{countValue}</div>;
 * };
 */
export const createAtomSelector = <T>(atom: Atom<T>) => {
  /**
   * Jotai 原子选择器 Hook。
   *
   * @template R - 选择器返回值的类型
   * @param {function(a: T) => R} selector - 选择器函数，从原子状态中提取需要的值
   * @param {any[]} [deps=[]] - 依赖数组，用于控制 `useCallback` 的依赖项
   * @returns {R} - 经过选择器处理的值
   */
  const hook = <R>(selector: (a: T) => R, deps: any[] = []) =>
    useAtomValue(
      // 使用 selectAtom 创建经过选择器处理的新原子
      selectAtom(
        atom,
        useCallback(a => selector(a as T), deps)
      )
    )

  // 将原子对象保存在 Hook 的属性 __atom 中，提供访问原子的方式
  hook.__atom = atom

  return hook
}
