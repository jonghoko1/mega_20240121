// 실습 1
//#1. 오늘 0000년00월00일 요일 시:분:초 순으로 날짜 객체로부터 받아와서 콘솔창에 출력 (추천 : 요일정보는 배열데이터를 활용할 것)

var $today = new Date();
console.log($today);

var cur_year = $today.getFullYear();
var cur_month = $today.getMonth() + 1;
var cur_date = $today.getDate();
var cur_day = $today.getDay();
var day_arr = ['일', '월', '화', '수', '목', '금', '토'];
var cur_hour = $today.getHours();
var cur_minute = $today.getMinutes();
var cur_second = $today.getSeconds();
console.log(`오늘 ${cur_year}년 ${cur_month}월 ${cur_date}일 ${day_arr[cur_day]}요일 ${cur_hour}시:${cur_minute}분:${cur_second}초`);
document.write(`<h3>실습1</h3><p>오늘 ${cur_year}년 ${cur_month}월 ${cur_date}일 ${day_arr[cur_day]}요일 ${cur_hour}시:${cur_minute}분:${cur_second}초</p><br />`);

// 실습 2
//#2. "첫째 아기 돼지는 움막을 지었고, 둘째 아기 돼지는 나무집을 지었고, 막내 아기 돼지는 벽돌집을 지었습니다.";
//객체 배열을 활용하여 위 문장을 완성하시오. (첫째 아기 돼지, 움막, 둘째 아기 돼지, 나무집, 막내 아기 돼지, 벽돌집  ==>  각 데이터로 구성할 것! 해당 항목은 key를 만들어서 각각 value값으로 넣어서 활용할 것)

var pigArr = [
    {pig: "첫째 아기 돼지", build: "움막"},
    {pig: "둘째 아기 돼지", build: "나무집"},
    {pig: "막내 아기 돼지", build: "벽돌집"},
]
console.log(`${pigArr[0].pig}는 ${pigArr[0].build}을 지었고, ${pigArr[1].pig}는 ${pigArr[1].build}을 지었고, ${pigArr[2].pig}는 ${pigArr[2].build}을 지었습니다.`);
document.write(`<h3>실습2</h3><p>${pigArr[0].pig}는 ${pigArr[0].build}을 지었고, ${pigArr[1].pig}는 ${pigArr[1].build}을 지었고, ${pigArr[2].pig}는 ${pigArr[2].build}을 지었습니다.</p><br />`);




// 실습 3
//#3. 빈 배열 데이터를 만드시오. 순차적으로 배열 데이터 내에 좋아하는 과일 5개를 for문을 활용하여 하나씩 추가해 주시기 바랍니다.
/*
const $fav_arr = [];
const $fruit = ["사과", "오렌지", "바나나", "포도", "자두"];

for문을 반복하는 과정에서 console.log($fav_arr)로 출력하되 하나씩 추가되는 과정을 모두 출력하시오.
*/
const $fav_arr = [];
const $fruit = ["사과", "오렌지", "바나나", "포도", "자두"];

for (i = 0; i < 5; i++) {
    $fav_arr.push($fruit[i]);
    console.log($fav_arr);
}

document.write(`<h3>실습3</h3><p>${$fav_arr}</p><br />`);



// 실습 4
//#4. 다음과 같이 데이터를 변경하시오. (splice 메서드 활용)
//["HTML", "CSS", "JAVASCRIPT", "JQUERY"];  ===>  ["HTML", "WEB", "JAVASCRIPT", "JQUERY"]; 

var $arr = ["HTML", "CSS", "JAVASCRIPT", "JQUERY"];
console.log($arr);
var $arr_ch = $arr.splice(1, 1, "WEB");
console.log($arr_ch);
console.log($arr);

document.write(`<h3>실습4</h3><p>${$arr}</p><br />`);


// 실습 5
//#5. 다음과 같이 배열 사이에 새로운 데이터를 넣으세요. (splice 메서드 활용 - 힌트 : 개수는 0개)
//["red", "yellow", "green", "blue"];  ===>  ["red", "orange", "yellow", "green", "blue"];

var $color = ["red", "yellow", "green", "blue"];
console.log($color);
var $colorCh = $color.splice(1, 0, "orange");
console.log($colorCh);
console.log($color);

document.write(`<h3>실습5</h3><p>${$color}</p><br />`);



// 실습 6
//#6. 다음과 같이 배열 데이터를 변경하세요.  (splice 메서드만 활용 - 힌트 : 개수는 0개)
//["korea", "USA", "Brazil", "France"]; ===> ["korea", "Japan", "USA", "Brazil", "France", "China"]

var country = ["korea", "USA", "Brazil", "France"];
country.splice(1, 0, "Japan");
country.splice(5, 0, "China");
console.log(country);

document.write(`<h3>실습6</h3><p>${country}</p><br />`);


// 실습 7
//#7. 다음과 같이 배열 데이터를 추출하시오 (slice 메서드 활용)
//["red", "yellow", "green", "blue"];  ===> ["yellow", "green"]

var color = ["red", "yellow", "green", "blue"];
var colorSlice = color.slice(1,3);
console.log(colorSlice);

document.write(`<h3>실습7</h3><p>${colorSlice}</p><br />`);


// 실습 8
//#8. 다음과 같이 배열 데이터를 추출하시오 (slice() 메서드 활용 + push() + join())
//["red", "yellow", "green", "blue"];  ===> ["yellow", "blue"]

var colorMix = color.slice(1,2)
colorMix.push(color[3]);
console.log(colorMix);

document.write(`<h3>실습8</h3><p>${colorMix}</p><br />`);


// 실습 9
//#9. 문자 데이터 "2021-08-23"에서 "20210823"으로 변경하시오. (아래 방법 중에서 선택하여 적용하시오)
//방법1 : split() 메서드 활용하여 join() 메서드 적용하기
//방법2 : replace() 메서드 활용하기

var string = "2021-08-23";
// var stringSplit = string.split('-').join("");
// console.log(stringSplit);
var stringReplace = string.replace(/-/g, "");
console.log(stringReplace);

document.write(`<h3>실습9</h3><p>${stringReplace}</p><br />`);