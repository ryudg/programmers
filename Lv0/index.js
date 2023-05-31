// 문제 :
// 제한사항 :

function solution(hp) {
  var answer = 0;
  var 장군 = Math.floor(hp / 5);
  var 병정 = Math.floor((hp - 장군 * 5) / 3);
  var 일 = Math.floor(hp - 장군 * 5 - 병정 * 3);
  answer = 장군 + 병정 + 일;
  return answer;
}

solution(23);
