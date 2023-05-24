// 문제 : 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
// 제한사항 : 0 < num1 ≤ 100, 0 < num2 ≤ 100

function solution(num1, num2) {
  var answer = Math.floor(num1 / num2); // Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
  return answer;
}
