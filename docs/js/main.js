/**
 * Описание задачи: Сделать собственную реализацию Array.map двумя смособами
 * отдельным медодом map(array, callback)
 */

const initialArray = [1, 2, 3, 4, 5, 6, 7];
const callBack = (item, index, array) => item * item + index;
// 1 способ
const map = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i], i, array);
  }
  return newArray;
};

//2 способ
const map2 = (array3, callback) => {
  let newArray2 = [];
  array3.forEach((item, index, array3) => {
    newArray2.push(callback(item, index, array3));
  });
  return newArray2;
};
console.log(initialArray.map(callBack)); // [1, 5, 11, 19, 29, 41, 55]
console.log(map2(initialArray, callBack)); // [1, 5, 11, 19, 29, 41, 55]
console.log(map(initialArray, callBack)); // [1, 5, 11, 19, 29, 41, 55]

/**
 * Описание задачи: Сделать собственную реализацию Array.filter
 * отдельным медодом filter(array, callback)
 */

const initialArray1 = [1, -2, 3, -4, 5, -6, 7];
const callBack1 = (item, index, array) => item > 0;
const filter = (array1, callback1) => {
  let newArr = [];
  for (let i = 0; i < array1.length; i++) {
    if (callBack1(array1[i], i, array1)) {
      newArr.push(array1[i]);
    }
  }
  return newArr;
};
console.log(initialArray1.filter(callBack1)); // [1, 3, 5, 7]
console.log(filter(initialArray1, callBack1)); // [1, 3, 5, 7]

/**
 * Описание задачи: Сделать собственную реализацию Array.reduce
 * отдельным медодом reduce(array, callback, initialValue)
 */

const initialArray2 = [1, 2, 3, 4, 5, 6, 7];
const callBack2 = (value, item, index, array) => item + value ;
const reduce = (array2, callback2, initialValue) => {
  let newArr1 = initialValue;
  for (let i = 0; i < array2.length; i++) {
    newArr1 = callBack2(newArr1, array2[i], i, array2);
  }
  return newArr1;
};
console.log(initialArray2.reduce(callBack2, 1)); // 29
console.log(reduce(initialArray2, callBack2, 1)); // 29
