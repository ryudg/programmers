// 문제 : 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// 제한사항 : my_string은 소문자와 공백으로 이루어져 있습니다, 1 ≤ my_string의 길이 ≤ 1,000

function solution(my_string) {
  var answer = [...my_string];
  var vowel = ["a", "e", "i", "o", "u"];
  answer = answer.filter((e) => !vowel.includes(e)); // includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별
  return answer.join("");
}
