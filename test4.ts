let a = false;
let b = 0;

let c = true;
let d = 9999;

let str1 = "sss";

let array1 = [3, 1, 9];

let jobject1 = { name: "홍길동", age: 20 };

console.log(`a:${a}`);
console.log(`str1:${str1}`);

console.log(`array1:`, array1);
console.log(`jobject:`, jobject1);

console.log(`jobect1의 이름은 :${jobject1.name}, 나이는:${jobject1.age}`);

let mix = [
  { name: "홍길동", age: 20 }, // 0
  { name: "이순신", age: 30 }, // 1
];

console.log(` mix 의 0번째 서랍 : `, mix[0]);
console.log(` mix 의 1번째 서랍 : `, mix[1]);
console.log(` mix 의 2번째 서랍 : `, mix[2]);

console.log(`mix의 0번째 서랍의 이름:`, mix[0].name);

let jhard1 = {
  name: "홍길동",
  history: {
    job: "야구선수",
    year: "1999",
  },
};

jhard1.history.year = "2019";

console.log(`jhard : `, jhard1);
console.log(`jhard.name : `, jhard1.name);
console.log(`jhard.history:`, jhard1.history);
console.log(`jhard.history.year:`, jhard1.history.year);
