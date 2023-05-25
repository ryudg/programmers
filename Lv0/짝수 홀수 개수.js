// 문제 : 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// 제한사항 : 1 ≤ num_list의 길이 ≤ 100, 0 ≤ num_list의 원소 ≤ 1,000

function solution(num_list) {
  var answer = [
    num_list.filter((e) => e % 2 == 0).length, // 정수가 2로 나눠서 0이 나오면 : 짝수
    num_list.filter((e) => e % 2 == 1).length, // 정수가 2로 나눠서 1이 나오면 : 홀수
  ];
  return answer;
}
