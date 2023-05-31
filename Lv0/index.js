// 문제 :
// 제한사항 :

function solution(price) {
  var answer = 0;
  answer =
    price >= 500000
      ? price * 0.8
      : price >= 300000
      ? price * 0.9
      : price >= 100000
      ? price * 0.95
      : price;
  return Math.floor(answer);
}

solution(150000);
