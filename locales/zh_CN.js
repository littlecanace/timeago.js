module.exports = function(number, index) {
  return [
    ['刚刚', '片刻后'],
    ['%s秒前', '%s秒后'],
    ['1分钟前', '1分钟后'],
    ['%s分钟前', '%s分钟后'],
    ['1小时前', '1小时后'],
    ['%s小时前', '%s小时后'],
    ['1天前', '1天后'],
    ['%s天前', '%s天后'],
    ['1周前', '1周后'],
    ['%s周前', '%s周后'],
    ['1月前', '1月后'],
    ['%s月前', '%s月后'],
    ['1年前', '1年后'],
    ['%s年前', '%s年后']
  ][index];
}