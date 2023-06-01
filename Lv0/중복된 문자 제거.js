// 문제 : 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
// 제한사항 : 1 ≤ my_string ≤ 110, my_string은 대문자, 소문자, 공백으로 구성되어 있습니다, 대문자와 소문자를 구분합니다, 공백(" ")도 하나의 문자로 구분합니다, 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.

function solution(my_string) {
  var answer = "";
  answer = [...new Set(my_string)].join(""); // my_string을 Set 객체로 변환, Set 객체는 중복된 값을 허용하지 않으므로, 이를 이용하여 중복되지 않는 문자들만 배열에 포함
  return answer;
}
