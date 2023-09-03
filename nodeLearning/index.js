// import { PI, getArea, getCircumference } from "./circle.js";
// import circle from "./circle.js"; //모든 값 불러오기

// console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));

import lodash from "lodash";

const arr = [1, 1, 1, 2, 2, 1, 1, 4, 4, 3, 2];
const uniqueArr = lodash.uniqBy(arr); //중복값 제거

console.log(uniqueArr);
