/*
    [CSS에서 괄호의 용도]
    () : nth-child(n)
    {} : 스타일 선언 시... 선택자{color: red;}
    [] : 속성 선택자... 선택자[속성명*="속성값"] = div[class*="box"]

    [자바스크립트에서 괄호의 용도]
    () : 메서드(명령), function 함수명(){}, 반복문이나 조건문에서 형성하는 구조 => for(구성식){} / if(조건문){}
    {} : 메모리 스코프 function 함수명(){실행문}, for(){실행문} / if(){실행문}, 객체 데이터를 구성 시,
    변수명 = {
        key1: value1,
        key2: value2,
        ...
    }
    [] : 배열 데이터
*/

// f(x) = x + 1 ==> x라는 값이 적용되기 전에는 아무것도 결과를 도출할 수 없음.
// x라는 값에 2를 적용한다면, 결과는 3
// [함수문의 구성]
// - x + 1 이라는 메모리 공간
// - x에 담기는 설정을 호출문

// 함수 메모리 공간
function start() {
    document.write("<p>함수 호출 결과~!!</p>");
}
// 함수 호출부
start(); // strat라고 명명된 함수문을 호출한다.

// 배경색 변경
var $body = document.querySelector("body");
var bgColor = ["#faa", "#ffa", "#afa", "#aaf"];
var i = 0; // 0 => 1 => 2 => 3 => 4(x) 0(o)

function change_bg() {
    console.log(`적용전 : ${i}`);
    // i = 0;
    // i = 1;
    // i = 2;
    // i = 3;

    $body.style.backgroundColor = bgColor[i];
    console.log(`적용된 배경색 : ${bgColor[i]}`);
    // bgColor[0] = "#faa";
    // bgColor[1] = "#ffa";
    // bgColor[2] = "#afa";
    // bgColor[3] = "#aaf";
    i++;

    console.log(`적용후 : ${i}`);
    // i = 1;
    // i = 2;
    // i = 3;
    // i = 4; => 찾을 수 없는 인덱스번호

    if(i == bgColor.length) {
        i = 0; // 최초의 인덱스번호로 변경해주세요~
    }
}

// [일반 함수 - 직접 호출]
// #1. 함수문을 작성한다.(대기 할 메모리)
function call() {
    console.log(`call의 호출문에 의한 함수문 실행`);
}

// #2. 함수 호출문(함수문의 내부 실행문을 진행시키기 위한 호출)
call(); // 1번째 함수 호출문
call(); // 2번째 함수 호출문

// [익명 함수 - 간접 호출]
// #1. 함수문을 작성한다.(대기할 메모리)
var call_who = function() {
    console.log(`익명 함수 호출`);
}
// #2. 함수 호출문
call_who();
console.log(call_who); // 함수문을 표현(실행 안됨)
console.log(call_who()); // 함수문을 호출(정의되지 않은 데이터)

// 캐릭터 구성(객체로 구성 => 속성 + 기능(메서드))
var hero = {
    //속성파트
    name : "화염용병",
    level : 10,

    //기능파트
    action : function() {
        console.log(this); // hero 변수를 가리킨다.
        console.log(`${hero.name}이 모험을 떠납니다.`)
        console.log(`${this.name}이 모험을 떠납니다.`)
    }
}
console.log(hero);
console.log(hero.name);
console.log(hero.action);
console.log(hero.action()); // 객체 내의 기능을 호출한 결과

// 함수문과 DOM의 결합
// #1. 선택자의 구성(HTML 문서상을 기반으로 작성 된 실질 공간 선택)
var $func = document.querySelector("#func");
console.log($func);

// #2. 함수문 작성
function img_attr(){
    $func.setAttribute("src", "./img/pet.png");
    $func.setAttribute("alt", "반려동물");
    $func.setAttribute("title", "반려동물 이미지");
}
// #3. 함수 호출
img_attr();

//// 클릭 이벤트에 의한 이미지 변경[익명함수 적용]
// #1. 선택자
var $img_01 = document.querySelector("#img_01");

// #2. 함수문
var img_change = function() {
    $img_01.setAttribute("src", "./img/girl.png");
}

//// 버튼 클릭시마다 순차적으로 이미지 변경(pic-1.jpg ~ pic-4.jpg)
var $func_02 = document.querySelector("#btn_img");
var $num = 2; // 파일상 직접 호출해야 할 초기 넘버

function change_img() {
    $func_02.setAttribute("src", `./img/pic-${$num}.jpg`)
    $num++;
    if($num == 5){
        $num = 1; // 4번 이미지 표출 후, 다음번 호출에 대한 값을 지정한다. 5번 이미지는 존재하지 않기 때문에 1번으로 돌려놓는다.
    }
}

//// 이전 버튼과 다음 버튼을 클릭 시 해당하는 이미지로 표현(pic-1.jpg ~ pic-4.jpg)
var $ch_img = document.querySelector("#ch_img");
var num = 1;

function next() {
    num++;
    if(num > 4) { // num = 0일때
        num = 1; // 강제로 4로 변경하여 그 이전 번호 진행하도록 구성
    }
    $ch_img.setAttribute("src", `./img/pic-${num}.jpg`);
    
}
function prev() {
    num--;
    if(num < 1) { // num = 5일때
        num = 4; // 강제로 1로 변경하여 그 다음 번호 진행하도록 구성
    }
    $ch_img.setAttribute("src", `./img/pic-${num}.jpg`);
}