/* index.js */

// 랜덤방식으로 로또번호 6개를 추출해야 한다면
var lottoArr = [];
var lottoNum;
while(lottoArr.length < 6) { // lottoArr의 배열 데이터의 개수가 6보다 작으면 계속 반복시킨다. 6개가 되면 반복문 탈출
    lottoNum = Math.floor(Math.random() * 46) + 1; // 1~46
    if(lottoArr.indexOf(lottoNum) == -1) { // 기존 lottoArr 배열 데이터에 동일한 값이 존재하지 않는다면
        lottoArr.push(lottoNum) // 맨 뒤에 넣어주세요
    }
}
console.log(`자동모드로 생성된 로또 번호 6개 : ${lottoArr}`);
lottoArr.sort(function(a, b){
    return a - b;
})
console.log(`자동모드로 생성된 로또 번호 6개 (작은수부터 정렬된 상태) : ${lottoArr}`);
// 데이터로 받을 때, 날짜 데이터 20240122 < 20240331


// 웹접근성 : 시각장애인, 색약장애인, 청각장애인, 신체장애인 등 모든 기본적인 활동이 제한된 사용자에 대해서 웹 또는 앱에도 동일하게 정보를 받을 수 있도록 소스를 설계하는 일련의 과정
// <a href="URL주소" onclick="this.href='URL주소'" onkeydown="this.href='URL주소'">링크로 이동</a>



// nike
// 선택자 구성
var $nike_contCover = document.querySelector("#cont_01 .wrap .cont");
var $nike_contGroup = "";

// 랜덤 방식으로 0,1,2,3 중에서 두 개를 가져온다. (조건, 동일한 숫자가 존재하지 않음)
var nike_num_arr = [];
var nike_number;
while(nike_num_arr.length < 2){
    nike_number = Math.floor(Math.random() * 4); // 0 ~ 3
    // 최소값 0.0001 =(*4)=> 0.0004 =(Math.floor():내림)=> 0
    // 최대값 0.9999 =(*4)=> 3.9996 =(Math.floor():내림)=> 3

    console.log(nike_number);
    if(nike_num_arr.indexOf(nike_number) == -1) { // 배열 데이터에 동일한 값이 존재하지 않는다면
        nike_num_arr.push(nike_number); // 맨 뒤에 넣어주세요
    }
    console.log(nike_num_arr);
}

// 해당 배열 데이터로부터 이미지를 화면상에 구현한다.
for(i = 0; i < nike_num_arr.length; i++){
    $nike_contGroup += `
    <div style = "background-image: url(./img/nike_0${nike_num_arr[i] + 1}.jpg)" onclick="location.href='./detail.html#nike_${nike_num_arr[i]}'"></div>
    `;
}
$nike_contCover.innerHTML = $nike_contGroup;

// adidas
// 선택자 구성
var $adidas_contCover = document.querySelector("#cont_02 .wrap .cont");
var $adidas_contGroup = "";

// 랜덤 방식으로 0,1,2,3 중에서 두 개를 가져온다. (조건, 동일한 숫자가 존재하지 않음)
var adidas_num_arr = [];
var adidas_number;
while(adidas_num_arr.length < 2){
    adidas_number = Math.floor(Math.random() * 4); // 0 ~ 3
    // 최소값 0.0001 =(*4)=> 0.0004 =(Math.floor():내림)=> 0
    // 최대값 0.9999 =(*4)=> 3.9996 =(Math.floor():내림)=> 3

    console.log(adidas_number);
    if(adidas_num_arr.indexOf(adidas_number) == -1) { // 배열 데이터에 동일한 값이 존재하지 않는다면
        adidas_num_arr.push(adidas_number); // 맨 뒤에 넣어주세요
    }
    console.log(adidas_num_arr);
}

// 해당 배열 데이터로부터 이미지를 화면상에 구현한다.
for(i = 0; i < adidas_num_arr.length; i++){
    $adidas_contGroup += `
    <div style = "background-image: url(./img/adidas_0${adidas_num_arr[i] + 1}.jpg)" onclick="location.href='./detail.html#adidas_${adidas_num_arr[i]}'"></div>
    `;
}
$adidas_contCover.innerHTML = $adidas_contGroup;

// puma
// 선택자 구성
var $puma_contCover = document.querySelector("#cont_03 .wrap .cont");
var $puma_contGroup = "";

// 랜덤 방식으로 0,1,2,3 중에서 두 개를 가져온다. (조건, 동일한 숫자가 존재하지 않음)
var puma_num_arr = [];
var puma_number;
while(puma_num_arr.length < 2){
    puma_number = Math.floor(Math.random() * 4); // 0 ~ 3
    // 최소값 0.0001 =(*4)=> 0.0004 =(Math.floor():내림)=> 0
    // 최대값 0.9999 =(*4)=> 3.9996 =(Math.floor():내림)=> 3

    console.log(puma_number);
    if(puma_num_arr.indexOf(puma_number) == -1) { // 배열 데이터에 동일한 값이 존재하지 않는다면
        puma_num_arr.push(puma_number); // 맨 뒤에 넣어주세요
    }
    console.log(puma_num_arr);
}

// 해당 배열 데이터로부터 이미지를 화면상에 구현한다.
for(i = 0; i < puma_num_arr.length; i++){
    $puma_contGroup += `
    <div style = "background-image: url(./img/puma_0${puma_num_arr[i] + 1}.jpg)" onclick="location.href='./detail.html#puma_${puma_num_arr[i]}'"></div>
    `;
}
$puma_contCover.innerHTML = $puma_contGroup;