/*detail.js*/
//이미지 및 텍스트의 데이터를 배열화 
//데이터 패턴 : ["이미지", "타이틀", "내용"]
var $nike = [
    ["nike_01.jpg", "나이키 타이틀1", "나이키 내용1"],
    ["nike_02.jpg", "나이키 타이틀2", "나이키 내용2"],
    ["nike_03.jpg", "나이키 타이틀3", "나이키 내용3"],
    ["nike_04.jpg", "나이키 타이틀4", "나이키 내용4"],
];
var $adidas = [
    ["adidas_01.jpg", "아디다스 타이틀1", "아디다스 내용1"],
    ["adidas_02.jpg", "아디다스 타이틀2", "아디다스 내용2"],
    ["adidas_03.jpg", "아디다스 타이틀3", "아디다스 내용3"],
    ["adidas_04.jpg", "아디다스 타이틀4", "아디다스 내용4"],
];
var $puma = [
    ["puma_01.jpg", "푸마 타이틀1", "푸마 내용1"],
    ["puma_02.jpg", "푸마 타이틀2", "푸마 내용2"],
    ["puma_03.jpg", "푸마 타이틀3", "푸마 내용3"],
    ["puma_04.jpg", "푸마 타이틀4", "푸마 내용4"],
];


//http://127.0.0.1:5504/08_javascript_BOM_hash/detail.html#puma_2
var $hash = location.hash; //#puma_2
var $hash_txt = $hash.replace("#", ""); //puma_2
var $divide_arr = $hash_txt.split("_");
console.log($divide_arr); //['puma', '2']
var $brand = $divide_arr[0];
var $index = $divide_arr[1];


//선택자 구성
var $detailBg = document.querySelector("#cont .wrap .ad_img");
var $detailTitle = document.querySelector("#cont .wrap h3");
var $detailText = document.querySelector("#cont .wrap p");

if($brand == "nike"){
    $detailBg.style.backgroundImage = `url(./img/${$nike[$index][0]})`;
    $detailTitle.textContent = $nike[$index][1];
    $detailText.textContent = $nike[$index][2];
}
if($brand == "adidas"){
    $detailBg.style.backgroundImage = `url(./img/${$adidas[$index][0]})`;
    $detailTitle.textContent = $adidas[$index][1];
    $detailText.textContent = $adidas[$index][2];
}
if($brand == "puma"){
    $detailBg.style.backgroundImage = `url(./img/${$puma[$index][0]})`;
    $detailTitle.textContent = $puma[$index][1];
    $detailText.textContent = $puma[$index][2];
}


// 하단의 목록 보기 버튼 클릭시
var backBtn = document.querySelector(".history button");
backBtn.addEventListener("click", function(){
    // history.back(); // 방문 기록상 한단계 뒤로 보낸다.
    // history.forward(); // 방문 기록상 한단계 앞으로 보낸다.
    // history.go(-1); // 방문 기록상 한단계 뒤로 보낸다.
    location.href = `./sub.html#${$brand}`
});
