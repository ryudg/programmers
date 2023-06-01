// 문제 : 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
// 제한사항 : 0 < num < 1,000,000, 0 ≤ k < 10, num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.

function solution(num, k) {
  var answer = 0;
  answer =
    num.toString().split("").indexOf(k.toString()) == -1
      ? -1
      : num.toString().split("").indexOf(k.toString()) + 1;
  return answer;
}

// 다른 사람의 풀이
function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}
