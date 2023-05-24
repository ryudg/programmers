// 문제 : 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
// 제한사항 : 0 < num1 ≤ 100, 0 < num2 ≤ 100

function solution(num1, num2) {
  var answer = num1 % num2; // 나머지 연산자(%)는 왼쪽 피연산자를 오른쪽 피연산자로 나눴을 때의 나머지를 구한다.
  return answer;
}
