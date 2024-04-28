//02_jsx_web.js
//jsx에 단일 태그(태그는 한가지)만 존재하는 경우
// const oneTag = <h1>타이트</h1>

//jsx에 복합 태그(태그가 여러가지)가 존재하는 경우
/*
const severalTag = (
    <>
        <div>
            <h1>타이틀</h1>
        </div>
        <div>

        </div>
    </>
)
*/

//html에서 class ==> className
//직접 jsx 문법 내에서 스타일 적용시 style={{스타일명1 : "스타일값1", 스타일명2 : "스타일값2", ...}} ==> 리액트 퍼블 과정에서는 가급이면 작성하지 말 것을 권유(프론트 개발자가 급한 이슈 처리간 필요한 영역)

//메뉴 파트(2차 배열)
const menu_arr = [
    ["About", "/about"],
    ["Project", "/project"],
    ["Contact", "/contact"],
];
const headerEl = (
    <header className="container-fluid bg-white" style={{height: "60px", borderBottom: "1px solid #ddd"}}>
        <div className="container d-flex justify-content-between align-items-center h-100">
            <div className="logo">
                <a href="./" className="d-block">
                    <img src="../img/logo.png" alt="로고 이미지" style={{height: "40px"}} />
                </a>
            </div>
            <ul className="d-flex">
                {menu_arr.map((v, i) => (
                    <li className="mx-3" key={i}>
                        <a href={v[1]} className="text-secondary d-block text-uppercase">
                            {v[0]}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </header>
);

const sec1_arr = [
    ["../img/f1.jpg", "Photo1"],
    ["../img/f2.jpg", "Photo2"],
    ["../img/f3.jpg", "Photo3"],
    ["../img/f4.jpg", "Photo4"],
    ["../img/f5.jpg", "Photo5"],
    ["../img/f6.jpg", "Photo6"],
    ["../img/f7.jpg", "Photo7"],
];
/*
        <div class="pt-5">
            <div class="container">
                <h2 class="text-center text-info">Best Item</h2>
            </div>
            <div class="container py-5">
                <div class="row justify-content-center pt-3">
                    <div class="col-sm-6 col-md-3 pb-3">
                        <img src="../img/f1.jpg" alt="Photo1" style="width:100%">
                    </div>
                    <div class="col-sm-6 col-md-3 pb-3">
                        <img src="../img/f2.jpg" alt="Photo2" style="width:100%">
                    </div>
                    <div class="col-sm-6 col-md-3 pb-3">
                        <img src="../img/f3.jpg" alt="Photo3" style="width:100%">
                    </div>
                    <div class="col-sm-6 col-md-3 pb-3">
                        <img src="../img/f4.jpg" alt="Photo4" style="width:100%">
                    </div>
                </div>
            </div>
        </div>
*/
const section1El = (
    <div className="pt-5">
        <div className="container">
            <h2 className="text-center text-info">Best Item</h2>
        </div>
        <div className="container py-5">
            <div className="row justify-content-center pt-3">
                {sec1_arr.map((v, i) => (
                    <div className="col-sm-6 col-md-3 pb-3" key={i}>
                        <img src={v[0]} alt={v[1]} style={{width:"100%"}} />
                    </div>
                ))}
            </div>
        </div>
    </div>
)

const footerEl_data = {
    list : [
        {menu: "Intro", link: "/intro"},
        {menu: "Location", link: "/location"},
        {menu: "Event", link: "/event"},
    ],
    copyWrite: "© Ice Cream House.LTD"
}
const footerEl = (
    <>
        <div className="container" style={{borderTop: "1px solid #ddd"}}>
            <ul className="row">
                {footerEl_data.list.map((v, i) => (
                    <li className="col-4 text-center" key={i}><a href={v.link}>{v.menu}</a></li>
                ))}
            </ul>
        </div>
        <p className="text-center py-2">{footerEl_data.copyWrite}</p>
    </>
)



ReactDOM.render(headerEl, document.querySelector("#header"));
ReactDOM.render(section1El, document.querySelector("#section1"))
ReactDOM.render(footerEl, document.querySelector("#footer"));