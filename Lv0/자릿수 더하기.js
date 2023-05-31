// 문제 : 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
// 제한사항 : 0 ≤ n ≤ 1,000,000

function solution(n) {
  var answer = (n + "")
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
  return answer;
}

// 다른 사람의 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
