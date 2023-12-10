// function solution(orders, course) {
//     var answer = [];
//     function substract(a, b) {
//       let result = a;

//       for (let i = 0; i < b.length; i++) {
//         var start = result.indexOf(b[i]);
//         var end = start + 1;
//         result = result.substring(0, start) + result.substring(end);
//       }
//       return result;
//     }
//     for (let i = 0; i < orders.length; i++) {
//       let orderCount = 0;
//       const inCourse = course.filter((value) => {
//         return value === orders[i].length;
//       });
//       if (inCourse.length == 0) {
//         continue;
//       }
//       for (let j = 0; j < orders.length; j++) {
//         if (i === j) {
//           continue;
//         } else {
//           if (
//             substract(orders[j], orders[i]).length ===
//             orders[j].length - orders[i].length
//           ) {
//             orderCount += 1;
//           }
//         }
//       }
//       console.log(orderCount, orders[i])
//       if (orderCount >= 1) {
//         answer.push(orders[i]);
//       }
//     }

//     return answer;
//   }

function solution(orders, course) {}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
