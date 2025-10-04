// console.log(`Jack Ma maslahatlari:`);
// const list = [
//   `yaxshi talaba boling`, //0-20
//   `togri boshliq tanlang va koproq hato qiling`, //20-30
//   `uzingiz uchun ishlashni boshlang`, //30-40
//   `siz kuchli bolgan narsalarni qiling`, //40-50
//   `yoshlarga investitsiya qiling`, //50-60
//   `endi dam oling uyogi yaqin qoldi`, //60
// ];

const moment = require("moment");

// Callback functions
// function maslahatBering(a, callback) {
//   if (typeof a !== `number`) callback(`insert a number`, null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log(`passed here 0`);
// maslahatBering(65, (err, data) => {
//   if (err) console.log(`Error:`, err);
//   else {
//     console.log(`javob:`, data);
//   }
// });
// console.log(`passed here 1`);

// Asyn functions
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
// setTimeout(function () {
//   returnlist[5];
// }, 5000);
//   }
// }

// call via then/catch
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });
// console.log("passed here 1");

//  call via async/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(66);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// Homework task

// function test(plan, work) {
//   let math = work.split("");
//   let work1 = math.filter((char) => char === plan);
//   return work1.length;
// }

// console.log(test("e", "engineer"));

/*
1) functiondagi "work" parametrini "math"ga tenglab "split" metodi orqali harflarga ajratdim
2) endi "math"ni "work1"ga tenglab "filter" metodi orqali "planga"("e")ga teng harflarni filter qilamiz va saqlab qolamiz
3) "length" metodi bilan "e"larni sanaymiz
4) console.log da 2ta qavs ishlatamiz.Agar bitta qavs ishlatsak bizga sonni ko'rsatmaydi
*/

// Homework end

// // DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 23) {
//     callback("Bu notogri", null, false);
//   } else {
//     const c = a + b;
//     callback(null, c);
//   }
// }

// Task B

// function task(b) {
//   let count = 0;
//   for (let char of b) {
//     if (!isNaN(char) && char !== "") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(task("aw7865a2ge76ad"));

// Task C

// class Shop {
//   constructor(son, son2, son3) {
//     this.son = son;
//     this.son2 = son2;
//     this.son3 = son3;
//   }
//   time = moment().format("HH:mm");

//   qoldiq() {
//     console.log(
//       `Hozir ${this.time}da ${this.son}ta Non, ${this.son2}ta Cola, ${this.son3}ta Lag'mon mavjud `
//     );
//   }
//   sotish(sotuv) {
//     this.son -= sotuv;
//     this.son2 -= sotuv;
//     this.son3 -= sotuv;
//   }
// }

// const myShop = new Shop(4, 5, 2);
// myShop.qoldiq();

// myShop.sotish(2, 3, 1);
// myShop.qoldiq();

// Homework Task D

// function task(a, b) {
//   if (a.length !== b.length) {
//     false;
//   }
//   let work = a.split("").sort().join("");
//   let work2 = b.split("").sort().join("");
//   return work == work2;
// }

// console.log(task("son", "osn"));
// console.log(task("anna", "dnas"));

// Homework Task E

function taskE(char) {
  return char.split("").reverse().join("");
}

console.log(taskE("hello"));
