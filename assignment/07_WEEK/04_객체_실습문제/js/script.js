// 실습1

var cat = {img: "cat_01.gif", name: "모모냥"}
document.write(`<h2>실습1</h2><img src="./img/${cat.img}"/><h3 style="color: red;">${cat.name}</h3><br />`);


// 실습2

var num1 = "12,000";
var num2 = "24,000";
var sum = parseInt(num1.replace(",", "")) + parseInt(num2.replace(",", ""));
console.log(sum);
document.write(`<h2>실습2</h2><p style="color: red; font-weight: bold;">두 수의 합산 결과: ${sum}원</p><br />`);


// 실습3

var randomNum = Math.ceil(Math.random() * 8);
console.log(randomNum);
document.write(`<h2>실습3</h2><p style="color: red; font-weight: bold;">랜덤 메서드의 값: ${randomNum}</p><img src="./img/molang${randomNum}.jpg" style="width: 200px;" /><br />`);


// 실습4

var catArr = ['cat_icon1.png', 'cat_icon2.png', 'cat_icon3.png', 'cat_icon4.png', 'cat_icon5.png', 'cat_icon6.png'];

document.write(`<h2>실습4</h2>`);
for (i = 0; i < 6; i++) {
    document.write(`<img src="./img/${catArr[i]}" style="width: 100px;"/>`);
}