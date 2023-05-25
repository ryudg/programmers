// 문제 : 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
// 제한사항 : 1 ≤ my_string의 길이 ≤ 1,000

function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  // 전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.
  // join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
  return answer;
}
