/**
 * 常用的工具类函数
 */

/**
 *
 * @returns {boolean}  true - mobile/ false - PC
 */
const isMobile = () => {
  const userAgent = navigator.userAgent;
  return userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i);
};

export { isMobile };
