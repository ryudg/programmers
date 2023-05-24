// 문제 : 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
// 제한사항 : 0 ≤ numbers의 원소 ≤ 1,000, 1 ≤ numbers의 길이 ≤ 100, 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

function solution(numbers) {
  var answer = numbers.reduce((acc, cur) => acc + cur) / numbers.length;
  return answer;
}

/*
 reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환한다.
arr.reduce(callback[, initialValue])
callback 함수의 네 가지 인자
1. accumulator 누산기 (acc)
2. currentValue 현재 값 (cur)
3. currentIndex 현재 인덱스 (idx)
4. array 원본 배열 (src)
*/
