// 실습 1
var x = 23;
var y = 12;
var z = x + y;
document.write(`최종 합계는 ${z} 입니다.`, "<br />");
console.log(z);
console.log(typeof(z));

// 실습 2
var a, b, c;
a = 12;
b = 5;
c = a % b;
document.write(`두 수를 나눈 나머지 값은 ${c} 입니다.`, "<br />");
console.log(c);
console.log(typeof(c));

// 실습 3
var thisYear = 2024;
thisYear++;
document.write(`내년은 ${thisYear}년 입니다.`, "<br />");
console.log(thisYear);
console.log(typeof(thisYear));

// 실습 4
var $num = 1;
$num == 1 || $num == 3 ?
    document.write("당신은 남성 입니다.", "<br />")
    :
    document.write("당신은 여성 입니다.", "<br />")
;
console.log($num);
console.log(typeof($num));

// 실습 5
var img = "";
img += "<img src='./img/kakao_01.jpg'>";
img += "<img src='./img/kakao_02.jpg'>";
img += "<img src='./img/kakao_03.jpg'>";
img += "<img src='./img/kakao_04.jpg'>";
img += "<br />";
document.write(img);
console.log(img);
console.log(typeof(img));