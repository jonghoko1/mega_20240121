// edu_01

var $text = document.querySelector("#edu_01 span");

function resizeEvent() {
    // console.log("리사이즈 이벤트 발생");
    var winWidth = window.innerWidth;

    if (winWidth >= 1024) {
        $text.textContent = "올리브 영에서 개최하는 이벤트 상품을 안내합니다."
        $text.style.fontSize = "24px"
    } else if (winWidth < 1024 & winWidth >= 768) {
        $text.textContent = "올리브 영에서 개최하는 이벤트 상품 안내"
        $text.style.fontSize = "24px"
    } else {
        $text.textContent = "올리브 영 개최 이벤트 상품 안내"
        $text.style.fontSize = "18px"
    }
}
resizeEvent();
window.addEventListener("resize", resizeEvent);
