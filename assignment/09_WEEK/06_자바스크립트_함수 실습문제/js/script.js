// 자바스크립트 실습 - 함수
// 실습1. 아래의 조건에 맞춰 결과값을 화면에 출력하시오. [일반 함수]
// 조건1 : 아래의 [HTML 구조] 부분을 복사하여 붙여 넣으시오.

// 조건2 : 아래의 div 태그를 선택하고 함수문을 호출하여 해당하는 이미지를 내부에 넣으시오. (img 태그 활용할 것!)

// 조건3 : 가져온 이미지를 인접요소 선택자(자식요소 선택자 - 인덱스 있음)를 활용하여 가로 폭을 160px로 조정하시오.(자바스크립트 활용할 것!)

// [HTML 구조]
//             <div id="test_01" class="func_01">
//             </div>

var $test01 = document.querySelector("#test_01");
function addImg1() {
    $test01.innerHTML = `<img src="./img/smurfs_img.jpg">`
};
addImg1();

var $test01Img = document.querySelector("#test_01 img");
$test01Img.style.width = "160px";


// ==========================================================================

// 실습2. 아래의 조건에 맞춰 결과값을 화면에 출력하시오. [매개변수]
// 조건1 : 아래의 [HTML 구조] 부분을 복사하여 붙여 넣으시오.

// 조건2 : 아래의 div 태그를 선택하고 함수문을 호출하여 내부에 img 태그를 넣으시오.

// 조건3 : 함수 호출간 데이터를 매개변수에 전달하여 해당하는 이미지(smurf_movie.png) 및 텍스트("스머프의 모험")를 img 태그의 src 및 alt 속성값으로 넣어 표현하시오. (img 태그 활용할 것!)

// 조건4 : 가져온 이미지를 인접요소 선택자(자식요소 선택자 - 인덱스 있음)를 활용하여 높이 폭을 200px로 조정하시오.(자바스크립트 활용할 것!)

// [HTML 구조]
//             <div id="test_02" class="func_02">
//             </div>
            
var $test02 = document.querySelector("#test_02");
function addImg2(img2, alt2) {
    $test02.innerHTML = `<img src="./img/${img2}" alt="${alt2}">`
};
addImg2("smurf_movie.png", "스머프의 모험");

var $test02Img = document.querySelector("#test_02 img");
$test02Img.style.height = "200px";


// ==========================================================================


// 실습3. 아래의 조건에 맞춰 결과값을 화면에 출력하시오. [매개변수의 재사용]
// 조건1 : 아래의 [HTML 구조] 부분을 복사하여 붙여 넣으시오.

// 조건2 : 아래의 div 태그를 선택하고 함수문을 호출하여 내부에 img 태그들을 넣으시오.

// 조건3 : 함수문의 재호출간의 결과값의 갱신이 아닌 추가 되도록 img 저장공간을 초기 변수로 구성하하시오.

// 조건4 : 함수 호출간 데이터를 매개변수에 전달하여 해당하는 이미지(smurf_movie.png) 및 텍스트("스머프의 모험")를 img 태그의 src 및 alt 속성값으로 넣어 표현하시오. (img 태그 활용할 것!)

// 조건5 : 위의 조건과 같이 다시 호출문을 작성하여 함수 호출간 데이터를 매개변수에 전달하여 해당하는 이미지(smurf_poster.jpg) 및 텍스트("스머프의 귀환")를 img 태그의 src 및 alt 속성값으로 넣어 표현하시오.

// 조건6 : 스타일 시트를 활용하여 모든 이미지의 세로 사이즈를 200px로 조정하시오.

// [HTML 구조]
//             <div id="test_03" class="func_03">
//             </div>
            
var $test03 = document.querySelector("#test_03");

var images3 = "";

function addImg3(img3, alt3) {
    images3 += `<img src="./img/${img3}" alt="${alt3}">`
};
addImg3("smurf_movie.png", "스머프의 모험");
addImg3("smurf_poster.jpg", "스머프의 귀환");

$test03.innerHTML = images3;

// ==========================================================================

// 실습4. 아래의 조건에 맞춰 결과값을 화면에 출력하시오. [매개변수의 재사용]
// 조건1 : 아래의 [HTML 구조] 부분을 복사하여 붙여 넣으시오.

// 조건2 : 아래 배열 데이터를 변수에 저장하시오.

// 조건3 : 아래의 div 태그를 선택하고 함수문을 호출하여 내부에 img 태그들을 넣으시오.

// 조건4 : 함수 호출간 배열에 저장된 각 인덱스 데이터를 매개변수로 저장한 후 각 매개변수명을 img 태그 내의 속성값 위치에 배치하시오.

// 조건5 : 스타일 시트를 활용하여 모든 이미지의 가로 사이즈를 120px로 조정하시오.

// [HTML 구조]
//             <div id="test_04" class="func_04">
//             </div>
            
// 배열 데이터
//             ["smurf_01.png", "똘똘이 스머프"]
            
var $arr4 = ["smurf_01.png", "똘똘이 스머프"];

var $test04 = document.querySelector("#test_04");
function addImg4(img4, alt4) {
    $test04.innerHTML = `
    <img src="./img/${img4}" alt="${alt4}">
    <p style="font-weight: bold;">${alt4}</p>`
};
addImg4($arr4[0], $arr4[1]);




// ==========================================================================


// 실습5. 아래의 조건에 맞춰 결과값을 화면에 출력하시오. [매개변수의 재사용 + 반복문]
// 조건1 : 아래의 [HTML 구조] 부분을 복사하여 붙여 넣으시오.

// 조건2 : 아래 배열 데이터를 변수에 저장하시오. 또한, 복합대입연산자를 활용하여 추가시킬 수 있도록 초기변수 공간을 만드시오.

// 조건3 : 아래의 div 태그를 선택하고 함수문을 호출하여 내부에 [위 구조 내부에 들어갈 구문 패턴]을 넣으시오(이때 초기 변수공간을 활용하여 결과를 출력한다.).

// 조건4 : 함수 호출간 배열에 저장된 각 인덱스 데이터를 매개변수로 저장한 후 각 매개변수명을 각 태그의 위치에 데이터값을 전달하시오.

// 조건5 : 아래 스타일 시트를 적용하시오.

// [HTML 구조]
//             <div id="test_05" class="func_05">
//             </div>
            
// [위 구조 내부에 들어갈 구문 패턴 : img와 name은 매개변수]
//                 <div class='box5'><div class='img_part' style='background-image:url(./img/"+img+")'></div><h4>"+name+"</h4></div>
            
// 배열 데이터
            // ["smurf_01.png", "똘똘이 스머프"],
            // ["smurf_02.png", "익살이 스머프"],
            // ["smurf_03.png", "요리사 스머프"],
            // ["smurf_04.png", "전사 스머프"],
            // ["smurf_05.png", "똑똑이 스머프"],
            // ["smurf_06.png", "스머페트"],
            // ["smurf_07.png", "마법사 스머프"]
            
// [스타일 적용]
    // .box5{
    //     width: 220px; height: auto; 
    //     float: left; 
    //     margin: 0 10px 20px; 
    //     padding: 10px; 
    //     background-color: #fff; 
    //     box-shadow:0 0 2px rgba(0,0,0,0.5); 
    //     text-align: center;
    // }
    // .box5 .img_part{
    //     width: 100%; height: 300px; 
    //     background-size: cover; 
    //     background-position: 50% 50%;
    // }
            
var $arr5 = [
    ["smurf_01.png", "똘똘이 스머프"],
    ["smurf_02.png", "익살이 스머프"],
    ["smurf_03.png", "요리사 스머프"],
    ["smurf_04.png", "전사 스머프"],
    ["smurf_05.png", "똑똑이 스머프"],
    ["smurf_06.png", "스머페트"],
    ["smurf_07.png", "마법사 스머프"]
];

var images5 = "";
var $test05 = document.querySelector("#test_05");

function addImg5(img5, alt5) {
    images5 += `<div class='box5'><div class='img_part' style='background-image:url(./img/${img5})'></div><h4>${alt5}</h4></div>`
};

for(i = 0; i < 7; i++) {
    addImg5($arr5[i][0], $arr5[i][1])
};

$test05.innerHTML = images5;
