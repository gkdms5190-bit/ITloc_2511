//1~20까지에서, 소수를 primes배열에 저장하고 출력해보세요 //
let num = 20;
let primes: number[] = [];

for (let num = 2; num <= 20; num++) {
  let isPrime = true; // num이 소수인지 판별하는 변수

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false; // 나누어떨어지면 소수가 아님
      break; // 더 이상 확인할 필요 없음
    }
  }

  if (isPrime) {
    primes.push(num); // 소수라면 배열에 추가
  }
}

console.log(primes);
