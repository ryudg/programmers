// 문제 : 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
// 제한사항 : 1 ≤ num_list의 길이 ≤ 1,000, 0 ≤ num_list의 원소 ≤ 1,000

function solution(num_list) {
  var answer = num_list.reverse(); // reverse() 메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.
  return answer;
}
