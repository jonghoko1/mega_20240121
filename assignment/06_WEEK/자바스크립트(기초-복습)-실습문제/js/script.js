// 실습 1
document.write(`안녕하세요`);

document.write(`<br /><br />`);


// 실습 2
$num01 = 36;
$num02 = 12;
sum = $num01 + $num02;
document.write(`sum = ${sum}<br />`);
substract = $num01 - $num02;
document.write(`substract = ${substract}<br />`);
multiply = $num01 * $num02;
document.write(`multiply = ${multiply}<br />`);
divide = $num01 / $num02;
document.write(`divide = ${divide}<br />`);
reminder = $num01 % $num02;
document.write(`reminder = ${reminder}<br />`);

document.write(`<br /><br />`);


// 실습 3
$num03 = 36;
$num04 = 12;
$result = $num03+=$num04;
document.write(`$result(+=)=${$result}<br />`);
$result = $num03-=$num04;
document.write(`$result(-=)=${$result}<br />`);
$result = $num03*=$num04;
document.write(`$result(*=)=${$result}<br />`);
$result = $num03/=$num04;
document.write(`$result(/=)=${$result}<br />`);
$result = $num03%=$num04;
document.write(`$result(%=)=${$result}<br />`);

document.write(`<br /><br />`);


// 실습 4
/*
var $width = prompt("브라우저의 가로 값(px)", "");
var $height = prompt("브라우저의 세로 값(px)", "");
document.write(`브라우저의 총 면적(px) : ${$width * $height}`);

document.write(`<br /><br />`);
*/

// 실습 5
var $t = "<table border = '1'>";
$t += "<tr></tr>";
$t += "<td style='width: 20px; text-align: center;'>1</td>";
$t += "<td style='width: 20px; text-align: center;'>2</td>";
$t += "<td style='width: 20px; text-align: center;'>3</td>";
$t += "<tr></tr>";
$t += "<td style='width: 20px; text-align: center;'>4</td>";
$t += "<td style='width: 20px; text-align: center;'>5</td>";
$t += "<td style='width: 20px; text-align: center;'>6</td>";
$t += "</table>";
document.write($t);

document.write(`<br /><br />`);

// 실습 6
/*
var $num_in = prompt("네 자리 이상의 수를 입력하세요");
if ($num_in < 1000) {
    alert("네 자리 이상의 수를 입력하세요");
    document.write(`네 자리 이상의 수를 입력하세요.<br />새로고침 후 다시 진행하세요.`);
} else if ($num_in % 7 == 0) {
    document.write(`입력한 ${$num_in}은(는) 7의 배수입니다.`);
} else {
    document.write(`입력한 ${$num_in}은(는) 7의 배수가 아닙니다.`);
}

document.write(`<br /><br />`);
*/

// 실습 7
document.write(`<div class="wrap" style="display: flex; flex-wrap: wrap;">`);
for($bx_num = 1; $bx_num <= 10; $bx_num++) {
    document.write(`<div style="width: 50px; height: 50px; background-color: #faf; margin: 5px;"></div>`);
}
document.write(`</div>`);
document.write(`<br /><br />`);

// 실습 8
document.write(`<div style="clear: both;"></div>`);
var $bx_limit = prompt("보여줄 박스의 개수를 입력하세요");
if ($bx_limit == parseInt($bx_limit)) {
    for (m = 1; m <= $bx_limit; m++) {
        document.write(`<div style="width: 100px; height: 100px; background-color: #aff; margin: 5px; float: left;"></div>`);
    }
} else {
    alert(`정수를 입력하세요.`);
    document.write(`정수를 입력하세요.<br />새로고침 후 다시 진행하세요.`);
}