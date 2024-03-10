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