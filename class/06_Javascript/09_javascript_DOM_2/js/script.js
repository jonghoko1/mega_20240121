/* 근거리 선택자 */
/* parentNode : 부모의 요소를 선택 */
var $child = document.querySelector(".parent_selector .children");
console.log($child); // <p class="children">CSS3</p>

var $parent = $child.parentNode;
console.log($parent);
/*
    <div class="parent_selector">
        <p>HTML5</p>
        <p class="children">CSS3</p>
        <p>Javascript</p>
    </div>
*/

/* childNodes : 자식을 찾아서 선택(문서상 엔터 영역도 자식으로 인정) */
var $parent1 = document.querySelector(".childNodes_selector");
var $child_nodes = $parent1.childNodes;
console.log($child_nodes); // NodeList(9) [text, li, text, li, text, li, text, li, text]
// text의 데이터는 실제 문서상에서 작성한 내용을 품고있지 않음. 문서상에 존재하는 엔터값과 + 탭공간을 표현(빈노드)

// Portfolio의 폰트가중치를 bold로 변경
$child_nodes[5].style.fontWeight = "bold";

/* childern : 자식을 찾아서 선택(실제 유효한 자식만 선택) */
var $parent2 = document.querySelector(".children_selector");
var $childern = $parent2.children;
console.log($childern); // HTMLCollection(4) [li, li, li, li]

/* closest("CSS 상에서 선택 가능한 모든 타입") : 가장 가까운 조상을 탐색하여 선택하겠다는 메서드 */

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
$ancestor_who.style.border = "2px dashed red";

/* 첫번째 자식(firstChild) / 마지막 자식(lastChild) */
var $parent3 = document.querySelector(".child_group");

var $first = $parent3.firstChild;
console.log($first); // #text
var $real_frist = $parent3.firstChild.nextSibling;
console.log($real_frist); // <p class="first">첫째</p>

var $last = $parent3.lastChild;
console.log($last); // #text
var $real_last = $parent3.lastChild.previousSibling;
console.log($real_last); // <p class="last">넷째</p>

//////////////////////////////////////////////////////
// DOM에서 요소를 생성하고 지정한 장소에 하위로 위치시키기
// 1) 지정한 장소에 대한 선택자
var $headLine = document.querySelector(".createElement_appendchild");

// 2) 문서 객체를 생성
var $createEl = document.createElement("h3");
console.log($createEl); // <h3></h3>

// 3) 위에서 생성한 태그 조작하기
$createEl.textContent = "새롭게 생성한 문장입니다.";
console.log($createEl); // <h3>새롭게 생성한 문장입니다.</h3>

$createEl.classList.add("headLine1");
console.log($createEl); // <h3 class="headLine1">새롭게 생성한 문장입니다.</h3>

$createEl.style.backgroundColor = "#ff0";

// 4) 위에서 조립한 태그를 지정한 장소에 넣기(맨 위에 넣을 것인가? 또는 맨 아래에 넣을 것인가?)
$headLine.appendChild($createEl); // 마지막 자식의 위치에서 배치시키기

// 배열 데이터["red", "orange", "yellow", "green", "blue"]가 존재하여 지정된 하단의 공간에 차례대로 내부의 자식으로 넣기
var $color_arr = ["red", "orange", "yellow", "green", "blue"];
var $colorBox = document.querySelector(".color_box");
// for(i = 0; i < $color_arr.length; i++) {
//     var $createBx = document.createElement("p");
//     $createBx.textContent = $color_arr[i];
//     $createBx.style.borderLeft = `4px solid ${$color_arr[i]}`;
//     $colorBox.appendChild($createBx);
// }

// for~in, for~of 해보기

// 배열변수.forEach
$color_arr.forEach(function(v, i){
    var $createBx = document.createElement("p");
    $createBx.textContent = v;
    $createBx.style.borderLeft = `4px solid ${v}`;
    $colorBox.appendChild($createBx);
});

// [실습] 001-hamster.png ~ 007-sandbox.png를 배열 데이터에 넣고 하단의 구성에 차례대로 표현하기
// setAttribute 이용
// alt 항목에 넣을때는 문자열의 substr(인덱스번호, 개수) + split("특정 문자")
var img_arr = [
    "001-hamster.png",
    "002-turtle.png",
    "003-cat.png",
    "004-dog.png",
    "005-bird.png",
    "006-fish.png",
    "007-sandbox.png",
];
var $imgageBox = document.querySelector(".imageBox");

/*
for(i = 0; i < img_arr.length; i++) {
    $createImg = document.createElement("img");
    $createImg.setAttribute("src", `./img/${img_arr[i]}`);
    $createImg.setAttribute("alt", `${(img_arr[i].substring(0 , img_arr[i].length - 4)).substring(4)}`);
    $imgageBox.appendChild($createImg);
}
*/

for (v of img_arr) {
    var $createImg = document.createElement("img");
    $createImg.setAttribute("src", `./img/${v}`);

    // 001-hamster.png => hamster
    // substr(idx, 개수)
    // console.log(v.substr(4, v.length - 8));

    // split("특정문자")
    // console.log(v.split(".")[0].split("-")[1]);

    $createImg.setAttribute("alt", v.substr(4, v.length - 8));
    $imgageBox.appendChild($createImg);
}

/* append() 와 prepend()*/
var colorCover1 = document.querySelector(".addChild_first_last");
colorCover1.prepend("<p>레드</p>");
colorCover1.append("<p>블루</p>");

var scheduleToday = document.querySelector(".addLastChild");
var lastSchedule = document.querySelector(".mySchedule");

// scheduleToday.appendChild(lastSchedule); // 선언된 객체를 이동시킨다.
scheduleToday.append(lastSchedule); // 선언된 객체를 이동시킨다.

/* 문서 객체 이동시키기 - appendChild() VS append()의 공통점과 차이점 */
// -- 공통점 : 객체 이동이 가능
var c_appendChild = document.querySelector(".compare_appendChild");
var c_appendChild_first = c_appendChild.children[0];
console.log(c_appendChild_first); // <h4>1-1. 타이틀</h4>
c_appendChild.appendChild(c_appendChild_first);

var c_append = document.querySelector(".compare_append");
var c_append_first = c_append.children[0];
console.log(c_append_first); // <h4>2-1. 타이틀</h4>
c_append.append(c_append_first);

// -- 차이점
// appendChild("문자 데이터")
// c_appendChild.appendChild("<span>1-3. 막내추가</span>");
c_append.append("<span>1-3. 막내추가</span>");
// appendChild("문자 데이터") : 직접 문자열을 포함할 수 없음(변수에 객체 형태로 담았다면 가능)
// append("문자 데이터") : 직접 문자열을 포함할 수 있음. 단, 태그가 포함된 상태라면 태그로서 인정을 받을 수 없음(그냥 텍스트 타입으로 존재)


// 슬라이드 기초(방향키를 눌렀을 때 다음 이미지로 이동시키는 작업)

/* "다음"이라는 버튼을 클릭했을때, 맨 첫번째 이미지를 마지막 이미지 위치로 이동시키기(append() 이용) */
var $petBox1 = document.querySelector(".petBox1"); // 부모요소
var $nextBtn = document.querySelector(".nextBtn button");

$nextBtn.addEventListener("click", function(){
    var $petFirst = document.querySelector(".petBox1 img:first-child"); // "다음" 버튼을 클릭했을 때 시점
    console.log($petFirst);
    $petBox1.append($petFirst); // 객체 이동
});

/* "이전"이라는 버튼을 클릭했을때, 마지막 이미지를 첫번째 이미지 위치로 이동시키기(prepend() 이용) */
var $petBox2 = document.querySelector(".petBox2"); // 부모요소
var $prevBtn = document.querySelector(".prevBtn button");

$prevBtn.addEventListener("click", function(){
    var $petLast = document.querySelector(".petBox2 img:last-child");
    console.log($petLast);
    $petBox2.prepend($petLast);
});

/* setInterval을 활용하여 전체적으로 우측 이미지가 좌측 공간으로 하나씩 교체되는 과정을 구성(append() 이용. 단 시간은 2000밀리세컨드) */
var $petBox3 = document.querySelector(".petBox3"); // 부모요소

setInterval(function() {
    var $petFirst = document.querySelector(".petBox3 img:first-child");
    $petBox3.append($petFirst);
}, 2000);
