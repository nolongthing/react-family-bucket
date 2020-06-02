/**
 * @description: 返回传入时间的周整数
 * @param {number} data 时间戳（空值则转换当前系统时间） 
 * @return {number} 周整数 
 */
export function getWeek(date: number = new Date().getTime()) {
  const oneDayTime = 1000 * 60 * 60 * 24;
  return Math.floor((Math.floor(date / oneDayTime) + 3) / 7);
}