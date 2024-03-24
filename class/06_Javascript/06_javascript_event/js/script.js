// 외부스크립트를 활용하여 함수 호출1

var $mouse_img1 = document.querySelector(".ch_img1");
// console.log($mouse_img1);

function call_ch1() {
    $mouse_img1.setAttribute("src", "./img/tree-2-thumb.jpg")
}
function call_ch2() {
    $mouse_img1.setAttribute("src", "./img/tree-1-thumb.jpg") 
}

// 외부스크립트를 활용하여 함수 호출2

var $mouse_img2 = document.querySelector(".ch_img2");
// console.log($mouse_img2);
// mouseover2(); ==> 브라우저가 열리자마자 함수 호출에 의해 즉시 실행

//// 선택자.이벤트명 = 함수명
$mouse_img2.onmouseover = mouseover2;
// function으로 구성한 함수는 문서의 최상단으로 올라간다(호이스팅)
function mouseover2() {
    // console.log("함수실행");
    $mouse_img2.setAttribute("src", "./img/tree-2-thumb.jpg");
}
$mouse_img2.onmouseout = mouseout2;
function mouseout2() {
    // console.log("함수실행");
    $mouse_img2.setAttribute("src", "./img/tree-1-thumb.jpg");
}

// 외부스크립트를 활용하여 함수 호출3
var $mouse_img3 = document.querySelector(".ch_img3");

$mouse_img3.addEventListener("mouseover", function(evt){
    // console.log("이벤트 리스터 실행");
    // console.log(evt);
    $mouse_img3.setAttribute("src", "./img/tree-2-thumb.jpg");
});
$mouse_img3.addEventListener("mouseout", function(evt){
    $mouse_img3.setAttribute("src", "./img/tree-1-thumb.jpg");
});


// 요소대상 이벤트 : click
var $showBtn = document.querySelector(".showBtn");
var $showing = document.querySelector(".showing");

$showBtn.addEventListener("click", function(){
    $showing.innerHTML = `<img src="./img/flower1.jpg" alt="">`;
});

// 게임 캐릭터의 진행
var hero = {
    name : "목탁동동",
    level : 1,
    hp : 100
}
var your_hp = hero.hp; // 100(hp의 최대값)

var moveBtn = document.querySelector(".move");
var addHpBtn = document.querySelector(".add_hp");
var curState = document.querySelector(".cur_state");

// 이동이라는 버튼을 클릭했을 때, 생명력 -5씩 감소 => hero.hp == 0이 되는 순간 "000님의 생명력이 모두 소진되었습니다."
moveBtn.addEventListener("click", function(){
    if(hero.hp <= 5){
        curState.textContent = `${hero.name} 님의 생명력이 모두 소진되었습니다.`;
    }else{
        hero.hp -= 5;
        curState.textContent = `${hero.name} 님의 생명력 ${hero.hp}가(이) 되었습니다.`;
        console.log(hero.hp);
    }
    
    // console.log(`${hero.name}의 현재 생명력 : ${hero.hp}`);
});

// 기존 최대 생명력의 값(100)을 초과하면 안된다.
addHpBtn.addEventListener("click", function(){
    hero.hp += 10
    console.log(hero.hp);
    if(hero.hp >= your_hp) {
        hero.hp = your_hp // 105로 변경된 값을 최대값인 100으로 대입하여 적용한다.
        curState.textContent = `${hero.name} 님의 현재 생명력이 모두 채워졌습니다.`
    } else {
        curState.textContent = `${hero.name} 님의 생명력 ${hero.hp}가(이) 되었습니다.`;
    }
});

// 요소 대상 이벤트 : keyboard 이벤트
var input_space = document.querySelector(".input_box"); // 사용자가 입력을 하는 공간
var searchRst = document.querySelector(".search_rst");
var searchWord = document.querySelector(".searching_word"); // 검색어에 대한 결과를 보여주는 공간

input_space.addEventListener("keydown", function(event){
    if(event.keyCode == 13){ // keyboard 중에서 "enter" 키를 눌렀을 때 검색을 시작
        console.log(event.keyCode);
        console.log(input_space.value);
        console.log(typeof input_space.value);
        var input_word = input_space.value.trim(); // 입력된 검색어(문자열) 중에서 전후 공백을 제거한다.
        console.log(input_word);

        if(input_word == ""){ // 검색 입력상자에 띄어쓰기만 존재할 경우. 실제 검색어가 존재하지 않을 경우
            alert("검색어가 존재하지 않습니다.");
        }else{ // 실제 검색어가 하나라도 존재한다면
            searchWord.textContent = input_word;
        }
    }
});

// 마우스 이동을 통한 이미지 교체
var $move1 = document.querySelector("#move1"); // 마우스무브 이벤트가 발생하는 장소
var $cover = document.querySelector(".cover");

$move1.addEventListener("mousemove", function(evt){
    console.log("마우스 무브 이벤트 발생")
    console.log(evt);
    var $cur_x = evt.pageX;
    console.log(`공간에서 마우스의 x좌표 위치 : ${$cur_x}`);

    $cover.style.width = $cur_x + "px";
});

// 전체 대상 이벤트 : resize 이벤트
var $size = document.querySelector(".resize_val_space .size");
var $deviceName = document.querySelector(".resize_val_space .deviceName");

// $size.textContent = window.innerWidth; // 브라우저가 최초 로딩시 현재의 가로 사이즈를 가져와서 적용한다.

function resizeEvt() {
    var win_width = window.innerWidth;
    console.log(`현재 브라우저의 가로 사이즈 : ${win_width}`);
    $size.textContent = win_width;
    if(win_width >= 1200){
        $deviceName.textContent = "PC"
    }else if(win_width >= 768){
        $deviceName.textContent = "Tablet"   
    }else{
        $deviceName.textContent = "Mobile"   
    }
}

// 브라우저의 사이즈가 조정되면 이벤트가 발생한다.
window.addEventListener("resize", function(){
    console.log("리사이즈 이벤트 발생");
    resizeEvt(); // 리사이즈 이벤트 발생하면 함수를 호출해라
});

resizeEvt(); // 브라우저가 로딩되면 최초로 함수를 호출해라



// 전체 대상 이벤트 : scroll 이벤트

window.addEventListener("scroll", function(evt){
    console.log("스크롤 이벤트 발생");
    console.log(evt);
    var $scrollTop = window.scrollY;
    console.log(`브라우저 상단으로부터 스크롤바의 이동 거리 : ${$scrollTop}`);
});

var leftPart = document.querySelector(".left_part");
var rightPart = document.querySelector(".right_part");
window.addEventListener("scroll", function(){
    var $scrollTop = window.scrollY;
    if($scrollTop > 2200){
        leftPart.classList.add("active");
        rightPart.classList.add("active");
    }else{
        leftPart.classList.remove("active");
        rightPart.classList.remove("active");
    }
});