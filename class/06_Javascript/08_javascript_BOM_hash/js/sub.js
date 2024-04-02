/*sub.js*/
//http://127.0.0.1:5504/08_javascript_BOM_hash/sub.html#nike

//브라우저가 sub.html로 처음 접근했을 때
var $hash = location.hash;  //URL로부터 #을 포함한 우측의 문구를 가져오기
console.log($hash);  //#nike | #adidas | #puma
var $hash_txt = $hash.replace("#", "");
console.log($hash_txt);  //nike | adidas | puma

//선택자 구성하기
var $main = document.querySelector("main"); //배너 이미지 교체
var $title = document.querySelector("#cont .wrap .title h3"); //페이지 타이틀 교체
var $contCover = document.querySelector("#cont .wrap .cont"); //내부 이미지 담을 공간
var $contGroup = ""; //.cont라는 공간에 넣을 가상의 빈 문자열 데이터

var hash_apply = function(){
    $main.style.backgroundImage = `url(./img/${$hash_txt}_banner.jpg)`
    $title.textContent = $hash_txt;

    $contGroup = "";  //sub.html 내부에서 상단의 메뉴를 클릭했을 때, 기존의 내용을 초기화시킨다.(기존의 내용은 제거한 상태에서 변경된 내용만 받아들일 준비를 한다.)
    for(i = 0; i < 4; i++){
        $contGroup += `<div style="background-image:url(./img/${$hash_txt}_0${i+1}.jpg)" onclick="location.href='./detail.html#${$hash_txt}_${i}'"></div>`
    }
    $contCover.innerHTML = $contGroup;
    console.log($location.hash);
}
hash_apply();

//sub.html 페이지에서 상단의 메뉴를 클릭했을 때
var $list = document.querySelectorAll("header .wrap nav ul li");
console.log($list);  //NodeList(3) [li, li, li]

for(const v of $list){ //const 예약어를 사용하게되면 요소의 위치를 확실하게 고정시킬 수 있음 <-> var 예약어는 변경되는 성향을 가진다.
    console.log(v);
    v.addEventListener("click", function(){  //sub.html 내부에서 메뉴를 클릭했을 때
        console.log(v);
        $hash_txt = v.getAttribute("rel");  //기존 해시로부터 받아온 값을 각 li에 담긴 내용(속성값 rel)으로 변경하겠다는 의미
        console.log($hash_txt);
        hash_apply(); //상단에 선언된 함수를 호출
    });
}