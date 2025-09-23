// console.log(`Jack Ma maslahatlari:`);
// const list = [
//   `yaxshi talaba boling`, //0-20
//   `togri boshliq tanlang va koproq hato qiling`, //20-30
//   `uzingiz uchun ishlashni boshlang`, //30-40
//   `siz kuchli bolgan narsalarni qiling`, //40-50
//   `yoshlarga investitsiya qiling`, //50-60
//   `endi dam oling uyogi yaqin qoldi`, //60
// ];

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

function test(plan, work) {
  let math = work.split("");
  let work1 = math.filter((char) => char === plan);
  return work1.length;
}

console.log(test("e", "engineer"));

/*
1) functiondagi "work" parametrini "math"ga tenglab "split" metodi orqali harflarga ajratdim
2) endi "math"ni "work1"ga tenglab "filter" metodi orqali "planga"("e")ga teng harflarni filter qilamiz va saqlab qolamiz
3) "length" metodi bilan "e"larni sanaymiz
4) console.log da 2ta qavs ishlatamiz.Agar bitta qavs ishlatsak bizga sonni ko'rsatmaydi
*/
