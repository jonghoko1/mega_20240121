/**근거리 선택자**/
/*parentNode : 부모의 요소를 선택*/
var $child = document.querySelector(".parent_seletor .children");
console.log($child); //<p class="children">CSS3</p>

var $parent = $child.parentNode;
console.log($parent);
/*
    <div class="parent_seletor">
        <p>HTML5</p>
        <p class="children">CSS3</p>
        <p>Javascript</p>
    </div>
*/

/*childNodes : 자식을 찾아서 선택(문서상의 엔터 영역도 자식으로 인정 - (빈)노드 인정)*/
var $parent1 = document.querySelector(".childNodes_selector");
var $child_nodes = $parent1.childNodes;
console.log($child_nodes); //NodeList(9) [text, li, text, li, text, li, text, li, text]
//text의 데이터는 실제 문서상에서 작성한 내용을 품고있지 않음. 문서상에 존재하는 엔터값 + 탭공간을 표현(빈노드)

//Portfolio의 폰트가중치를 bold로 변경
$child_nodes[5].style.fontWeight = "bold";

/*children : 자식을 찾아서 선택(실제 유효한 자식만 선택)*/
var $parent2 = document.querySelector(".children_selector");
var $children = $parent2.children;
console.log($children); //[li, li, li, li]

/*closest("CSS상에서 선택 가능한 모든 타입") : 가장 가까운 조상을 탐색하여 선택하겠다는 메서드 */
var $startTarget = document.querySelector(".start_target");
var $ancestor_who = $startTarget.closest(".menu");
console.log($ancestor_who); 
/*
<ul class="menu">
    <li><a href="">회사소개</a>
        <ul>
            <li>회사연혁</li>
            <li>오시는길</li>
        </ul>
    </li>
    <li><a href="">경영소개</a>
        <ul>
            <li><a class="start_target" href="">CEO 인사말</a></li>
            <li><a href="">경영비전</a></li>
        </ul>
    </li>
</ul>
*/
$ancestor_who.style.border="2px dashed red";


/* 첫번째 자식(firstChild) / 마지막 자식(lastChild) */
var $parent3 = document.querySelector(".child_group");

var $first = $parent3.firstChild;
console.log($first); //#text
var $real_first = $parent3.firstChild.nextSibling;
console.log($real_first); //<p class="first">첫째</p>
var $real_last = $parent3.lastChild.previousSibling;
console.log($real_last); //<p class="last">넷째</p>

/////////////////////////////
//DOM에서 요소를 생성하고 지정한 장소에 하위로 위치시키기
//1) 지정한 장소에 대한 선택자
var $headLine = document.querySelector(".createElement_appendChild");

//2)문서객체를 생성
var $createEl = document.createElement("h3");
console.log($createEl); //<h3></h3>

//3)위에서 생성한 태그 조작하기
$createEl.textContent = "새롭게 생성한 문장입니다.";
console.log($createEl); //<h3>새롭게 생성한 문장입니다.</h3>

$createEl.classList.add("headLine1");
console.log($createEl); //<h3 class="headLine1">새롭게 생성한 문장입니다.</h3>

$createEl.style.backgroundColor="#ff0";

//4)위에서 조립한 태그를 지정한 장소에 넣기(맨 위에 넣을 것인가? 또는 맨 아래에 넣을 것인가?)
$headLine.appendChild($createEl);  //마지막 자식의 위치에 배치시키기

//배열 데이터 ["red", "orange", "yellow", "green", "blue"]가 존재하여 지정된 하단의 공간에 차례대로 내부의 자식으로 넣기
var $color_arr = ["red", "orange", "yellow", "green", "blue"];
var $colorBox = document.querySelector(".color_box");
// for(i=0; i<$color_arr.length; i++){
//     var $createBx = document.createElement("p");
//     $createBx.textContent = $color_arr[i];
//     $createBx.style.borderLeft=`4px solid ${$color_arr[i]}`;
//     $colorBox.appendChild($createBx);
// }

//for~in, for~of

//배열변수.forEach
$color_arr.forEach(function(v, i){
    var $createBx = document.createElement("p");
    $createBx.textContent = v;
    $createBx.style.borderLeft=`4px solid ${v}`;
    $colorBox.appendChild($createBx);
});

//[실습] 001-hamster.png ~ 007-sandbox.png를 배열 데이터에 넣고 하단의 구성에 차례대로 표현하기
//setAttribute 이용
//alt항목에 넣을 때는 문자열의 substr(인덱스번호, 개수) + split("특정 문자")
var img_arr = [
    "001-hamster.png",
    "002-turtle.png",
    "003-cat.png",
    "004-dog.png",
    "005-bird.png",
    "006-fish.png",
    "007-sandbox.png",
];
var $imageBox = document.querySelector(".imageBox");

for(v of img_arr){
    var $createImg = document.createElement("img");
    $createImg.setAttribute(`src`, `./img/${v}`);

    //001-hamster.png => hamster
    //substr(idx, 개수)
    // console.log(v.substr(4, v.length-8));

    //split("특정문자")
    // console.log(v.split(".")[0].split("-")[1]);

    $createImg.setAttribute(`alt`, v.substr(4, v.length-8));
    $imageBox.appendChild($createImg);
}

/*append()와 prepend()*/
var colorCover1 = document.querySelector(".addChild_first_last");
colorCover1.prepend("<p>레드</p>");
colorCover1.append("<p>블루</p>");

var scheduleToday = document.querySelector(".addLastChild");
var lastSchedule = document.querySelector(".mySchedule");

// scheduleToday.appendChild(lastSchedule);  //선언된 객체를 이동시킨다.
scheduleToday.append(lastSchedule);  //선언된 객체를 이동시킨다.

/*문서 객체 이동시키기 - appendChild() VS append()의 공통점과 차이점*/
//--공통점 : 객체 이동이 가능
var c_appendChild = document.querySelector(".compare_appendChild");
var c_appendChild_first = c_appendChild.children[0];
console.log(c_appendChild_first); //<h4>1-1. 타이틀</h4>
c_appendChild.appendChild(c_appendChild_first);

var c_append = document.querySelector(".compare_append");
var c_append_first = c_append.children[0];
console.log(c_append_first); //<h4>2-1. 타이틀</h4>
c_append.append(c_append_first);

//--차이점
//c_appendChild.appendChild("<span>1-3. 막내추가</span>");
c_append.append("<span>2-3. 막내추가</span>");
//appendChild("문자 데이터") : 직접 문자열을 포함할 수 없음(변수에 객체 형태로 담았다면 가능)
//append("문자 데이터") : 직접 문자열을 포함할 수 있음. 단, 태그가 포함된 상태라면 태그로써 인정을 받을 수 없음(그냥 텍스트 타입으로 존재)

//슬라이드 기초(방향키를 눌렀을 때 다음 이미지로 이동시키는 작업)
/*"다음"이라는 버튼을 클릭했을 때, 맨 첫번째 이미지를 마지막 이미지 위치로 이동시키기(append() 이용) */
var $petBox1 = document.querySelector(".petBox1"); //부모요소
var $nextBtn = document.querySelector(".nextBtn button");

$nextBtn.addEventListener("click", function(){
    var $petFirst = document.querySelector(".petBox1 img:first-child"); //"다음" 버튼을 클릭했을 때 시점
    console.log($petFirst);
    $petBox1.append($petFirst); //객체 이동
});

/*"이전"이라는 버튼을 클릭했을 때, 마지막 이미지를 첫번째 이미지 위치로 이동시키기(prepend() 이용) */

var $petBox2 = document.querySelector(".petBox2"); //부모요소
var $prevBtn = document.querySelector(".prevBtn button");

$prevBtn.addEventListener("click", function(){
    var $petLast = document.querySelector(".petBox2 img:last-child"); //"이전" 버튼을 클릭했을 때 시점
    console.log($petLast);
    $petBox2.prepend($petLast); //객체 이동
});

/*setInterval을 활용하여 전체적으로 우측 이미지가 좌측 공간으로 하나씩 교체되는 과정을 구성(append() 이용). 단 시간은 2000 밀리세컨드 */
var $petBox3 = document.querySelector(".petBox3");

setInterval(function(){
    var $petFirst = document.querySelector(".petBox3 img:first-child");
    $petBox3.append($petFirst);
}, 2000);

/*
이미지 슬라이드
 - 자동 롤링 슬라이드
 - 마우스 오버시, 슬라이드의 일시 정지
 - next, prev 버튼을 활용하여 이미지가 좌우로 넘어가도록 구성
*/
//#1) 선택자 구성
var $sliderBox = document.querySelector("#slider_box");
var $slider = document.querySelector(".slider");
var $slide = document.querySelectorAll(".slide");
console.log($slide);
/*
NodeList(5)
0: div.slide.slide1
1: div.slide.slide2
2: div.slide.slide3
3: div.slide.slide4
4: div.slide.slide5
*/
var $prev_btn = document.querySelector(".arrow_prev");
var $next_btn = document.querySelector(".arrow_next");

//#2) 초기 위치 설정(마지막 이미지 슬라이드를 맨 좌측으로 배치한다. 5-1-2-3-4)
// console.log($slide[$slide.length-1]);
$slider.prepend($slide[$slide.length-1]);

//#6) 각 슬라이드 진입간 효과 적용
function slideMotion(){
    $slide.forEach(function(v){
        v.classList.remove("active"); // 객체를 찾아가면서 active라는 클래스명을 제거
    })
    var $standard_slide = document.querySelector(".slide:nth-child(2)");
    console.log($standard_slide);
    $standard_slide.classList.add("active");
}
slideMotion(); // 초기 브라우저 로딩되자마자 함수를 호출하여 첫번째 슬라이드에 모션 적용

//#3) 자동 반복설정
setInterval(function(){
    //#4-1) 슬라이드 영역(#slider_box => $sliderBox)에서 현재 클래스명에 hover라는 존재의 유무를 판단
    var $hover = $sliderBox.classList.contains("hover");
    console.log(`현재 마우스의 위치가 슬라이드 영역 내부로 진행한 상태 : ${$hover}`); //true(마우스가 슬라이드 영역 내부로 오버된 상태) 또는 false(마우스가 슬라이드 영역 외부로 빠져나간 상태)

    if($hover == true){
        //아무것도 진행하지 않는다.
        // alert("마우스 오버된 상태~!");
    } else {
        var $first_slide = document.querySelector(".slide:first-child"); //반복하는 시점상에서 첫번째 객체만을 저장한다.
        console.log($first_slide);
        $slider.classList.add("next"); //margin-left:-100% => margin-left:-200%  (모션 효과)
    
        setTimeout(function(){
            $slider.append($first_slide); //맨 좌측의 이미지를 맨 우측으로 배치한다.
            $slider.classList.remove("next"); //margin-left:-200% => margin-left:-100%  (모션 효과)
            slideMotion();
        }, 500);
    }
}, 3000);

//#4) 슬라이드 영역 내부로 커서가 진입했을 때, 자동 반복설정을 제어(마우스 오버시 일시정지, 마우스 이탈시 자동 반복 진행)
$sliderBox.addEventListener("mouseover", function(){
    console.log(this);
    this.classList.add("hover");
});
$sliderBox.addEventListener("mouseout", function(){
    this.classList.remove("hover");
});

//#5) 양측 화살표를 클릭시 해당하는 이미지로 보여주기
//#5-1) 이전(<) 버튼 클릭시 : 좌측 이미지가 본 영역으로 들어온다
$prev_btn.addEventListener("click", function(event){
    event.preventDefault(); // a태그 영역이 포함된 경우, href 속성에 의한 초기화를 막는다.
    var $last_slide = document.querySelector(".slide:last-child"); // 버튼을 누른 시점상에서 가장 우측에 위치한 슬라이드를 선택
    $slider.classList.add("prev");
    setTimeout(function(){
        $slider.prepend($last_slide);
        $slider.classList.remove("prev"); //margin-left:0% => margin-left:-100% (모션효과)
        slideMotion();
    }, 500);
});

//#5-2) 다음(>) 버튼 클릭시 : 우측 이미지가 본 영역으로 들어온다
$next_btn.addEventListener("click", function(event){
    event.preventDefault(); // a태그 영역이 포함된 경우, href 속성에 의한 초기화를 막는다.
    console.log(event);

    var $first_slide = document.querySelector(".slide:first-child"); // 버튼을 누른 시점상에서 가장 좌측에 위치한 슬라이드를 선택
    $slider.classList.add("next");
    setTimeout(function(){
        $slider.append($first_slide);
        $slider.classList.remove("next"); //margin-left:-200% => margin-left:-100% (모션효과)
        slideMotion();
    }, 500)
});

/* removeChild : 기존에 존재하는 하위의 자식을 제거한다. */
var $nations = document.querySelector(".removeChild_method");
var $del_list = document.querySelector(".removeChild_method p:nth-child(2)");
$nations.removeChild($del_list);




var $delBtn = document.querySelector(".del_btn");
var $colorList = document.querySelector(".color_group");

$delBtn.addEventListener("click", function(){
    try {
        // var $delColor = $colorList.children[0] // 처음 리스트부터 제거
        var $delColor = $colorList.children[$colorList.children.length - 1]; // 마지막 리스트부터 제거

        $colorList.removeChild($delColor);
    }catch(err){
        console.log("에러발생");
    }
});
// try{...실행문...}catch(error){예외처리 구문}
// 예시로는 DB의 CRUD

// const, let(es6) =(build + babel)=> var(ex5)


/* To Do List */
// #1) 선택자 구성
var $add = document.querySelector("#addBtn");
var $total_list = document.querySelector("#todo_list");

var $inputList = document.querySelector("#todo");

// #2) 클릭 이벤트에 의한 데이터를 가져온다.

function addList(){
    var $inputVal = $inputList.value;
    console.log($inputVal);

    if($inputVal.trim() == ""){ //입력값이 빈 문자열이라면
        alert("할일 목록을 작성해주세요.")
    }else{ //입력값이 하나라도 존재한다면
        // 1차 리스트를 구성
        var $createList = document.createElement("div");
        $createList.classList.add("list");
        
        // 2차 문단 구성
        var $createText = document.createElement("p");
        $createText.textContent = $inputVal;
        
        // 2차 제거 버튼 구성
        var $createRemoveBtn = document.createElement("span");
        $createRemoveBtn.classList.add("remove");
        $createRemoveBtn.textContent = "×";

        // 1차 구성 내부에 2차 구성을 하나씩 넣는다.
        $createList.append($createText);
        $createList.append($createRemoveBtn);

        // 리스트($total_list) 내부에 1차 구성을 넣는다.
        $total_list.append($createList)
        
        // 입력값 등록 후, 입력 상자를 비운다.
        $inputList.value = "";
        $inputList.focus(); // 입력 리스트가 나오더라도 입력창에 포커스를 적용한다. (사용성 편의 차원에서)


        console.log($createRemoveBtn); // 생성되는 과정에서 특정적인 리스트의 제거 버튼으로 등록
        console.log($createRemoveBtn.previousSibling); // 이전 형제를 바라본다.


        $createRemoveBtn.addEventListener("click", function(){
            console.log($createList);
            $total_list.removeChild($createList);
        })
    }
}

// 등록 버튼 클릭시, 함수 호출
$add.addEventListener("click", function(){
    addList();
});
// 입력 상자에서 엔터 누를 경우, 함수 호출
$inputList.addEventListener("keydown", function(evt){
    if(evt.keyCode == "13"){
        addList();
    }
});
