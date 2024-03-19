// 실습 1

var peach = document.getElementById("fav");
peach.style.color = 'hotpink';
peach.style.fontWeight = "bold";



// 실습 2

var mintCho = document.getElementsByClassName("baskin");
console.log(mintCho);
mintCho[2].style.color = "chocolate";
mintCho[2].style.fontWeight = "bold";
mintCho[2].style.fontSize = "24px";



// 실습 3

var imgTags = document.querySelectorAll("#test_03 img");
console.log(imgTags.length);
for(i = 0; i < imgTags.length; i++) {
    imgTags[i].style.width = "160px";
    if(i == 1) {
        imgTags[i].style.border = "2px solid #f00";
    }
}



// 실습 4

var character = document.querySelector("#test_04 img");
character.setAttribute("src", "./img/desney_all.jpg");
character.setAttribute("alt", "디즈니 패밀리");
character.setAttribute("style", "width: 300px;");



// 실습 5

var area = document.querySelector("#test_05");
var kakaoArray = [
    ["kakao_01.gif", "피부관리"],
    ["kakao_02.gif", "첫눈"],
    ["kakao_03.gif", "피치의 봄날"],
    ["kakao_04.gif", "옛~썰"],
    ["kakao_05.gif", "네오의 삐침"],
];
console.log(kakaoArray.length);

var kakaoImg = "";
for (i = 0; i < kakaoArray.length; i++) {
    kakaoImg += `<img src="./img/${kakaoArray[i][0]}" alt="${kakaoArray[i][1]}" />`
}
console.log(kakaoImg);

area.innerHTML = kakaoImg;