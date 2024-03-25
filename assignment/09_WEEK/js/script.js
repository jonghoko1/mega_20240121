// 과제 1
// [잠깐 과제]
// 문구점에서 샤프(개당 가격은 1,000원) 5개와 스케치북(개당 가격은 3,000원) 2개를 구입했음. 총 합계를 구하시오.
// [최종 결과] 현재 총 구입 금액은 11000원 입니다.

var sharp = "1,000";
var sketch = "3,000";
var sharpPrice = sharp.replace(",", "");
var sketchPrice = sketch.replace(",", "");
var sum = sharpPrice * 5 + sketchPrice * 2;
console.log(sum);
document.write(`<h1>과제 1번</h1><p>현재 총 구입 금액은 ${sum}원 입니다.</p></br></br>`);




// 과제 2
// [과제] 객체 배열 데이터를 활용한 상품 리스트 구성하기
var pd_arr2 = [
    {img: "shop_01.jpg", title: "마마스앤파파스", cont: "트레이닝 완구 포함", price: "월 9,000원"},
    {img: "shop_02.jpg", title: "알집매트", cont: "알집꾸러기 매트", price: "월 6,000원"},
    {img: "shop_03.jpg", title: "알집소파1", cont: "알집꾸러기 네이비 소파", price: "월 7,000원"},
    {img: "shop_04.jpg", title: "알집소파2", cont: "알집꾸러기 핑크 소파", price: "월 8,000원"},
]

var section = "";
section = "<section style='display: flex;'>"
for(i = 0; i < pd_arr2.length; i++) {
    section += `
        <div class="box" style="width: calc(25%);">
            <img src="./img/${pd_arr2[i].img}" style="width: 100%"/>
            <h3>${pd_arr2[i].title}</h3>
            <p>${pd_arr2[i].cont}</p>
            <span>${pd_arr2[i].price}</span>
        </div>
    `
}
section += "</section>";
document.write(`<h1>과제 2번</h1>${section}</br></br>`);




// 과제 3
// [과제] 던전 입장 시 멤버들 구성 됨 => 카톡 오픈 채팅방에 코드와 콘솔창 결과 이미지를 캡쳐해서 보내주세요.
// (콘솔창에 출력할 내용)"이름(직업 - level)님이 입장하셨습니다."

// 2차 배열 패턴["닉네임", "직업", level]
var dungeon1 = [
    ["불타는 용병", "기사", 56],
    ["얼음 마법사", "마법사", 47],
    ["암흑 도적단장", "도적", 51],
    ["블랙 요정", "다크엘프", 49],
];

// 반복하여 호출

var entranceLog = "";
function entrance1(){
    for(i = 0; i < dungeon1.length; i++){
        console.log(`${dungeon1[i][0]}(${dungeon1[i][1]} - ${dungeon1[i][2]})님이 입장하셨습니다.`);
        entranceLog += `<p>${dungeon1[i][0]}(${dungeon1[i][1]} - ${dungeon1[i][2]})님이 입장하셨습니다.</p>`
    }
}
entrance1();
document.write(`<h1>과제 3번</h1>${entranceLog}</br></br>`);




// 객체배열
var dungeon2 = [
    {nickname : "불타는 용병", job : "기사", level : 56},
    {nickname : "얼음 마법사", job : "마법사", level : 47},
    {nickname : "암흑 도적단장", job : "도적", level : 51},
    {nickname : "블랙 요정", job : "다크엘프", level : 49},
];

// 반복하여 호출
for (var i of dungeon2) {
    console.log(`${i.nickname}(${i.job} - ${i.level})님이 입장하셨습니다.`);
}
