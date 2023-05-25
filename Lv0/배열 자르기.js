// 문제 : 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
// 제한사항  : 2 ≤ numbers의 길이 ≤ 30, 0 ≤ numbers의 원소 ≤ 1,000, 0 ≤num1 < num2 < numbers의 길이

function solution(numbers, num1, num2) {
  var answer = numbers.slice(num1, num2 + 1); // slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
  return answer;
}
