// // 原始对象
// const dateToIds = {
//   '2024-01-01': [1, 2, 3],
//   '2024-01-02': [1, 4],
// };
//
// // 漫画对象数组
// const comics = [
//   { id: 1, name: 'Comic 1' },
//   { id: 2, name: 'Comic 2' },
//   { id: 3, name: 'Comic 3' },
//   { id: 4, name: 'Comic 4' },
//   // ...
// ];
//
// // 辅助函数，用于根据 ID 查找漫画对象
// const findComicById = (id) => comics.find(comic => comic.id === id);
//
// Object.keys(dateToIds).forEach(date => {
//   dateToIds[date] = dateToIds[date].map(findComicById);
// })
//
// // console.log(dateToIds)
// console.log(dateToIds)
// console.log(Object.values(dateToIds))
//
// // const arr = ['2024-1-2','2024-1-10', ]
// //
// // arr.sort()
// //
// // console.log(arr)
//
// const nestedArray = [
//   [
//     { id: 1, name: 'Comic 1' },
//     { id: 2, name: 'Comic 2' },
//     { id: 3, name: 'Comic 3' }
//   ],
//   [
//     { id: 1, name: 'Comic 1' },
//     { id: 4, name: 'Comic 4' }
//   ]
// ];
//
// const flattenedAndUnique = Array.from(
//   nestedArray
//     .reduce((acc, cur) => acc.concat(cur), [])
//     .reduce((map, item) => map.set(item.id, item), new Map())
//     .values()
// );
//
// const flattenedAndUnique2 = [...new Set(nestedArray
//   .reduce((acc, cur) => acc.concat(cur), [])
// )]
//
// console.log(flattenedAndUnique)
// console.log(flattenedAndUnique2)
//
// const map = new Map()
//
// // map.set(1, 'a')
// // console.log(map)
// //
// // console.log(map.values())
// // console.log(map.keys())
// //
// // for (const value of map.values()) {
// //   console.log(value)
// // }
//
