
/* 字符串按数组分割，要求分别翻转每个字符串 */
const reverse = (str) => {
  let arr = str.split(' ')
  let result = arr.map(item => {
    return item.split('').reverse().join('')
  })
  return result.join(' ')
}

// export default (str) => {
//   // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//   // 2. 对数组进行遍历，然后每个元素进行反转
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//   // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//   // 2. 对数组进行遍历，然后每个元素进行反转
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

export default (str) => {
  // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
  // 2. 对数组进行遍历，然后每个元素进行反转
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

export { reverse }
