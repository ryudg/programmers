// 문제 : 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
// 제한사항 : 2 ≤ num_list의 길이 ≤ 10, 1 ≤ num_list의 원소 ≤ 9

function solution(num_list) {
  var answer = 0;
  answer =
    num_list.reduce((a, b) => a * b) <
    Math.pow(
      num_list.reduce((a, b) => a + b),
      2
    )
      ? 1
      : 0;
  return answer;
}
