import iterableMap from '@extra-iterable/map';
import cut from './cut';

/**
 * Breaks array after given indices.
 * @param x an array
 * @param is split indices (sorted)
 * @returns [...pieces]
 */
function cutRight<T>(x: T[], is: Iterable<number>): T[][] {
  return cut(x, iterableMap(is, i => i+1));
}
export default cutRight;
