// 실습1
/*
var $num = prompt("3자리 이상의 정수를 입력하세요.");
if ($num <= 99 || $num != parseInt($num)) {
    location.reload();
} else {
    if ($num % 4 == 0) {
        document.write(`${$num}은(는) 4의 배수입니다.`);
    } else {
        document.write(`${$num}은(는) 4의 배수가 아닙니다.`);
    }
}
document.write(`<br /><br />`);
*/

// 실습2
/*
var userName = prompt("이름을 입력하세요.", "");
if (userName === undefined || userName === null || userName == "") {
    alert(`이름을 입력해주세요.`);
    document.write(`이름을 입력해주세요.<br />새로고침 후 다시 진행해주세요.`);
} else {
var userScore = prompt("점수를 입력하세요. (0~100사이)", "");
    if (userScore > 100 || userScore < 0) {
        alert(`0~100 사이의 점수를 입력해주세요.`);
        document.write(`0~100 사이의 점수를 입력해주세요.<br />새로고침 후 다시 진행해주세요.`);
    } else {
        if (userScore <= 100 && userScore >=95) {
            document.write(`${userName}의 등급은 A+`);
        } else if (userScore < 95 && userScore >=90) {
            document.write(`${userName}의 등급은 A`);
        } else if (userScore <= 90 && userScore >=85) {
            document.write(`${userName}의 등급은 B+`);
        } else if (userScore <= 85 && userScore >=80) {
            document.write(`${userName}의 등급은 B`);
        } else if (userScore <= 80 && userScore >=75) {
            document.write(`${userName}의 등급은 C+`);
        } else if (userScore <= 75 && userScore >=70) {
            document.write(`${userName}의 등급은 C`);
        } else if (userScore <= 70 && userScore >=65) {
            document.write(`${userName}의 등급은 D+`);
        } else if (userScore <= 65 && userScore >=60) {
            document.write(`${userName}의 등급은 D`);
        } else {
            document.write(`${userName}의 등급은 F`);
        }
    }
}
document.write(`<br /><br />`);
*/

// 실습3
for ($number = 1; $number <= 12; $number++) {
    document.write(`<span>${$number},</span>`);
}
document.write(`<br /><br />`);

// 실습4
var imgNum1 = 1
document.write(`<div style="display: flex; flex-wrap: wrap;">`);
while (imgNum1 <= 12) {
    document.write(`<img class="insta" src="./img/instagram-${imgNum1}.jpg" style="width: 120px;"/>`);
    imgNum1++;
}
document.write(`</div>`);
document.write(`<br /><br />`);

// 실습5
document.write(`<div style="display: flex; flex-wrap: wrap;">`);
for (var imgNum2 = 0; imgNum2 <= 7; imgNum2++) {
    if (imgNum2 % 2 == 0) {
        document.write(`<img class="zoo" src="./img/img${imgNum2}.jpg" style="width: 120px;"/>`);
    } else {
        continue;
    }
}
document.write(`</div>`);