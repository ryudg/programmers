// 문제 : 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// 제한사항 : 1 ≤ my_string의 길이 ≤ 100, letter은 길이가 1인 영문자입니다, my_string과 letter은 알파벳 대소문자로 이루어져 있습니다, 대문자와 소문자를 구분합니다.

function solution(my_string, letter) {
  var answer = [...my_string].filter((e) => e != letter).join("");
  return answer;
}

// 다른 사람의 풀이
function solution(my_string, letter) {
  const answer = my_string.split(letter).join(""); // split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
  return answer;
}

function solution(my_string, letter) {
  return my_string.replaceAll(letter, ""); // replaceAll(pattern, replacement) 메서드는 pattern의 모든 일치 항목이 replacement로 대체된 새 문자열을 반환합니다.
}
