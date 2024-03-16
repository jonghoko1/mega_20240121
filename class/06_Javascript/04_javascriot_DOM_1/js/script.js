var titTest = document.getElementById("titTestID")
console.log(titTest); //<h3 class="titleTest" id="titTestID">타이틀 테스트</h3>

titTest.style.color = "#f00";
titTest.style.fontSize = "54px";

// DOM을 통해서 선언한 부분은 강제로 요소 내부로 작성된다.(CSS 보다도 우선순위를 가져간다.)

// 동일한 아이디가 하나의 문서 내부에 존재할 때, 맨 처음 해당하는 아이디로만 접근 가능 => 스크립트에서 작성된 모든 명령은 첫번째 아이디로만 적용할 수 있음

// 선택자
// [직접 선택자(원거리 선택자)]
// 1. 아이디선택자 : document.getElementById("아이디명");
// 2. 클래스선택자 : document.getElementsByClassName("클래스명")[인덱스명];
// 3. 태그선택자 : document.getElementsByTagName("태그명")[인덱스명];
// document.getElementsByTagName("body"[0]);

// 4. 특정명칭을 기반으로 선택 
// document.querySelector(".클래스명 | #아이디명 | 태그명 | css 사에서 선언가능한 모든 선택자의 형식");

// 5. 특정 명칭을 기반으로 복수의 요소를 선택할 때
// document.querySelectorAll(".클래스명 | 태그명 | css 사에서 선언가능한 모든 선택자의 형식")[인덱스번호]

//아이디 선택자
document.getElementById("id_txt").style.color = "blue";

//클래스 선택자
var $class_trip = document.getElementsByClassName("trip");
console.log($class_trip);
console.log($class_trip[1]);
$class_trip[1].style.backgroundColor = "#f90";

//태그 선택자
var $tag_h6 = document.getElementsByTagName("h6");
console.log($tag_h6);
console.log($tag_h6[2]);

var $body = document.getElementsByTagName("body");
console.log($body);
$body[0].style.backgroundColor = "#ff9";

//querySelector
var $query_item = 
    document.querySelector(".query_unit .fav_01");
console.log($query_item);

$query_item.style.fontWeight = "bold";

//querySelectorAll
var $all_item = document.querySelectorAll(".all_unit p");
console.log($all_item);
console.log($all_item[1]);
$all_item[2].style.color = "green";
$all_item[2].style.fontWeight = "bold";

//여러가지 요소를 대상으로 스타일을 모두 통일시켜야한다면
for(i = 0; i < $all_item.length; i++){
    $all_item[i].style.backgroundColor = "#aff";
}
for(v of $all_item){
    console.log(v);
    v.style.border = "1px dashed #f00";
}
// for(i in $all_item){
//     console.log(i);
//     $all_item[i].style.fontStyle = "italic";
// }
/*
[HTMLCollection와 NodeList 차이]
 - HTMLCollection : 문서상에 작성된 순서에 의해서 나열되는 형태(배열 데이터) => 지목을 정확하게 진행
 - NodeList : 요청에 의한 문서상에 접근하는 순서에 의해 나열되는 형태(배열 데이터) => 문서를 다시 훓는 과정에 따라서 선택자를 뽑는다.
 ==> 문서상의 구성에 따라 차이
*/

// 문서 객체 조작 : get, set
var $card = document.querySelector("#cardEvent");
console.log($card);
var $card_src = $card.src;
console.log($card_src); //절대 경로에 의한 소스 파일을 가져옴
//http://127.0.0.1:5501/class/06_Javascript/04_javascriot_DOM_1/img/card.png

var $getCardSrc = $card.getAttribute("src");
console.log($getCardSrc); // 실제 문서상에 존재하는 소스파일만 가져옴
//./img/card.png

// 문서의 set
// 변경(change)
var $kids = document.querySelector("#kids");
console.log($kids);
$kids.setAttribute("src", "./img/girl.png");
$kids.setAttribute("alt", "소녀 이미지");

// 생성(create)
$kids.setAttribute("class", "kidsImg");
$kids.setAttribute("author", "고종호");

// 제거(delete)
$kids.setAttribute("alt", "");

// 문서 객체 조작과 이벤트(이벤트를 지칭하는 명칭 + 함수)
var $targetImg = document.querySelector("#targetImg");
function moveRight(){
    $targetImg.setAttribute("class", "active"); //active 라는 클래스명을 생성
}
function moveLeft(){
    $targetImg.setAttribute("class", ""); //active 라는 클래스명을 제거
}
// 클래스명의 속성만을 조작 해야한다면 classList.add, remove, contains(true/false)
var $changeBg = document.querySelector(".change_bgc .bgColor");
console.log($changeBg.classList);

function changeBg(){
    $changeBg.classList.add("red"); // 클래스 속성에 새로운 클래스명을 추가
}

var $eleButton = document.querySelector(".elevatorButton .number button");
function onOffBtn() {
    var $stateActive = $eleButton.classList.contains("active");
    console.log($stateActive); //true면 active라는 클래스명이 존재 <-> false면 active라는 클래스명이 존재하지 않음
    if($stateActive){ //true
        $eleButton.classList.remove("active"); //Off
    }else{ //false
        $eleButton.classList.add("active"); //On
    }
}

// DOM에서 중요한 부분은 변경하고 싶은 대상이 무엇인지, 사용자가 동작을 수행시켜야 할 대상은 무엇인지
// 로그인 버튼과 로그인 팝업창은 동일하지 않음

var $darkBg = document.querySelector(".dark_bg");
var $pop = document.querySelector(".popup");

function loginOpen(){
    $darkBg.classList.add("active");
    $pop.classList.add("active");
}

function loginClose(){
    $darkBg.classList.remove("active");
    $pop.classList.remove("active");
}

// 메뉴 : 햄버거 아이콘 클릭에 의한 메뉴 보여주기
var $resMenu = document.querySelector(".res_menu");

function openMenu() {
    $resMenu.classList.add("active");
}
function closeMenu() {
    $resMenu.classList.remove("active");
}

// 금일 복습
/*
    선택자
    - [단일 선택자] document.querySelector("선택자");
    - [복수 선택자] document.querySelectorAll("선택자")[인덱스번호];
    문서조작
    - getAttribute("속성명")
    - setAttribute("속성명", "새로운 값") : 속성의 생성, 추가, 삭제
    - classList.add("추가 할 클래스명")
    - classList.remove("삭제 할 클래스명")
    - classList.contains("포함 된 클래스명") ==> 있으면 true / 없으면 false
*/

// 익일 예습
/*
    [get & set]
    innerHTML
    innerText
    TabBox 구성
*/