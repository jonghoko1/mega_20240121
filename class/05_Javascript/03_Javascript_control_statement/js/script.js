// 제어문 : 조건문(if ~ else if ~ else), 선택문(switch ~ case ~ break), 반복문(while, do while, for)

// #1. 조건문 : true 또는 false에 의해 지정된 화면을 보여줄 것인가 또는 감출것인가를 진행시키는 제어를 담당
var age = 16;
if (age > 13) {
    document.write("가입을 환영합니다.", "<br />");
} else {
    document.write("가입 연령이 아닙니다.", "<br />");
}

// 월별에 따른 계절 보여주기
var curMonth = 1;
if (curMonth >= 3 && curMonth <= 5) {
    document.write("따뜻한 봄입니다.");
} else if (curMonth >= 6 && curMonth <= 8) {
    document.write("뜨거운 여름입니다.");
} else if (curMonth >= 9 && curMonth <= 11) {
    document.write("시원한 가을입니다.");
} else {
    document.write("눈 내리는 겨울입니다.");
}
