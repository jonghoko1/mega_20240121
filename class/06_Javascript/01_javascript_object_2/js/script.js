document.write("<h3>문자객체</h3>");
// 문자객체 : 특정한 문자 데이터를 가져와서 요구사항에 맞춰 조작
// 인덱스 : 0 ~

var $str = "Have a good day";
var $charAt = $str.charAt(7);
console.log($charAt);

// 주민등록번호에서 남성과 여성을 구분
var $idNumber = "980313-1******";
var genderNum = $idNumber.charAt(7);
console.log(genderNum);
if(genderNum % 2 == 0){
    document.write(`여성 고객입니다.`);
}else{
    document.write(`남성 고객입니다.`);
}

// airbnb(@, 010, 01012345, ... 금지어)
// 댓글에서 특정 욕설 찾기("삐삐삐")
var $bad_str = "뿌뿌뿌 삐삐삐 뽀뽀뽀";
var search_word = $bad_str.indexOf("삐삐"); // 해당하는 글자 또는 단어를 문자형 데이터의 좌측으로부터 찾아 일치하는 첫번째 인덱스 번호를 추출
// 4 -> 단어중에 첫글자의 인덱스 번호를 도출
// -1 -> 단어중에 해당하는 글자를 찾을 수 없음
console.log(search_word);
if (search_word >= 0){ //0 이상인 경우
    console.log("금지어를 사용하셨네요.");
} else { //-1인 경우
    console.log("당신의 댓글은 등록되었습니다.");
}

// 마지막 문장으로부터 찾아서 인덱스 번호를 추출
var lastWord = "nice thank cheer up";
var searchLastWord = lastWord.lastIndexOf("e");
console.log(searchLastWord); //14
console.log(lastWord.indexOf("e")); //3

// match 되는 문자 반환하기
var hunmin = "우리말은 중국과 달라서...";
var match_01 = hunmin.match("호주");
console.log(match_01); //null
if(match_01 != null){
    console.log(`당신이 검색한 결과가 존재합니다.`);
}else{
    console.log(`당신이 검색한 결과가 존재하지 않습니다.`);
}

// replace(바꿀문자, 새문자)
// 가격정보 5,000
var buyPrice1 = "5,000";
var numPrice = Number(buyPrice1);
console.log(numPrice); //Nan -> 숫자형 데이터로 변경 불가

var changePrice1 = Number(buyPrice1.replace(",", ""));
console.log(changePrice1);
console.log(typeof(changePrice1));

// [잠깐 과제]
// 문구점에서 샤프(개당 가격은 1,000원) 5개와 스케치북(개당 가격은 3,000원) 2개를 구입했음. 총 합계를 구하시오.
// [최종 결과] 현재 총 구입 금액은 11000원 입니다.

var sharp = "1,000";
var sketch = "3,000";

// 2,000,000;
var $num = "2,000,000";
var $ch_num = $num.replace(",", "");
console.log($ch_num);

var $ch_num = Number($num.replace(/,/g,""));
console.log($ch_num);
/*
[정규식 표현]
/,/g
/,/ = ","
g = global 전역 -> 전역 검색(동일하게 구성된 모든 것을 선택)
*/
