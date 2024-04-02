// BOM(Browser Object Model) : 문서 공간을 제외한 모든 영역의 정보를 가져오거나 활용할 수 있음
// window 객체(최상위 객체)
// [react] window.addEventListner('이벤트')

// setInterval / clearInterval : 반복적으로 무언가를 수행해야할 경우(예시 : 이미지 슬라이드 자동 모드 구축 시, 디지털 타임을 적용)

// setTimeout / clearTimeout : 한번만 실행을 적용해야할 경우 (앱에서는 토스트 창 : 잠깐 보여주고 사라지는 창의 형태, 이미지 슬라이드에는 좌우로 이동하는 형태를 적용할 때)

// location 객체 : URL 정보의 값을 가져올 수 있고 또는 수정도 가능하다

// window.open("https://www.naver.com", "윈도우 팝업", "width=400, height=300, left=20, top=30")


// 내부 문서를 팝업창에 불러오기
var popBtn = document.querySelector("#windowOpen");
popBtn.addEventListener("click", function(){
    window.open("./index_popup.html", "윈도우 팝업", "width=400, height=400, left=20, top=20");
});

// setInterval의 구문 형식
/*
[방법1 - 무조건 실행]
setInterval(function(){
    실행문
}, 대기시간(밀리세컨드 단위))
[방법2 - 무조건 실행]
var 참조변수 = setInterval(function(){
    실행문
}, 대기시간(밀리세컨드 단위))
*/

// 0부터 올라가는 숫자
var $interval1 = document.querySelector(".interval1 span");
var num1 = 0;
setInterval(function(){
    $interval1.textContent = num1;
    num1++;
}, 1000);

// 10부터 내려가는 숫자
var $interval2 = document.querySelector(".interval2 span");
var num2 = 10;
/*
setInterval(function(){
    $interval2.textContent = num2;
    num2--;
    // -1 -> -2
}, 1000);
*/

// ... 음수의 값이 나오지 않도록 구성을 해야한다면
var $interval2_countDown = setInterval(function(){
    $interval2.textContent = num2;
    num2--;
    // -1 -> -2
    if(num2 < -1) {
        clearInterval($interval2_countDown); // 참조 변수를 호출함으로써 setInterval을 막을 수 있음
        $interval2.textContent = `로켓발사~~!`
    }
}, 1000); 

// 이미지 슬라이드(land_01.jpg ~ land_09.jpg) : 이미지 교체 (fadein / fadeout 효과)
var slide = document.querySelector('#imgSlide');
var no = 1;
setInterval(function(){
    no++; // 2, 3, 4, ..., 9, 10(x -> 1)
    slide.style.backgroundImage = `url(./img/land_0${no}.jpg)`;
    if(no == 9){
        no = 0;
    }
}, 3000);

// 실시간 데이터 디지털로 타임 적용하기
var $curTimes = document.querySelector(".curTimes span");
setInterval(function(){
    var curT = new Date();
    // console.log(curT);
    var curHour = curT.getHours();
    var curMin = curT.getMinutes();
    var curSec = curT.getSeconds();
    $curTimes.textContent = `${curHour}:${curMin}:${curSec}`
}, 1000);



// setTimeout : 지정된 시간이 지난 후, 한번만 실행하고 종료된다.(함수문 + 실행문 + 지정시간)
/*
[방법1 - 무조건 실행]
setTimeout(function(){
    실행문
}, 지정시간(밀리세컨드 단위))
[방법2 - 무조건 실행]
var 참조변수 = setTimeout(function(){
    실행문
}, 지정시간(밀리세컨드 단위))
*/

// 배경색 한번만 바꾸기
var $body = document.querySelector("body");
setTimeout(function(){
    $body.style.backgroundColor = "#aff";
}, 5000);

// 예약완료 버튼을 클릭하면 상단에서 "예약이 완료되었습니다."라는 문구를 띄웠다가 일정 시간이 지나면 사라지도록 구성

var reservationBtn = document.querySelector(".reservationBtn");
var fixedBox = document.querySelector(".fixed_box");
reservationBtn.addEventListener("click", function(){
    fixedBox.classList.add("active");
    setTimeout(function(){
        fixedBox.classList.remove("active");
    }, 4000);
});

// screen 객체
var $cur_width = document.querySelector(".cur_width span");
var $cur_height = document.querySelector(".cur_height span");

var $s_width = screen.width;
var $s_height = screen.height;

$cur_width.textContent = `${$s_width}px`
$cur_height.textContent = `${$s_height}px`

var $cur_availWidth = document.querySelector(".cur_availWidth span");
var $cur_availHeight = document.querySelector(".cur_availHeight span");

var $s_availWidth = screen.availWidth;
var $s_availHeight = screen.availHeight;

$cur_availWidth.textContent = `${$s_availWidth}px`
$cur_availHeight.textContent = `${$s_availHeight}px`

// location 객체
var $curURL = location;
console.log($curURL.port);
console.log($curURL.host);
console.log($curURL.pathname);
console.log($curURL.href);

// location.href = "변경할 주소"
// location.hash
// 주소창에 정보를 전달해야할 경우
var $urlHash = location.hash;
console.log($urlHash);

var realHashInfo = $urlHash.replace("#", "");
console.log(realHashInfo);