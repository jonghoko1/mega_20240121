//상세 페이지에서 제품을 2개 구입하고, 장바구니 버튼을 클릭했다면, 장바구니로 이동시 제품명, 제품 개수, 가격정보
//페이지간의 데이터 공유

//props(Properties의 약자)의 역할은 상태 정보를 갖고 있다면 이 상태 정보를 다른 컴포넌트와 공유 하고자 할 때 전달자의 역할을 함
//props는 위(부모)에서 아래(자식)으로 흐름(부모가 자식에게 전달할 데이터값과 메서드를 포함할 수 있음)

const root1 = document.querySelector("#root1");
//자식 컴포넌트
const Score = (props) => {
    console.log(props);
    /*
    {
        eng: "67"
        kor: "85"
        math: "75"
        name: "홍길동"
    }
    */
    return (
        <>
            <p>{props.name}</p>
            <p>수학 점수 : {props.math}</p>
            <p>국어 점수 : {props.kor}</p>
            <p>영어 점수 : {props.eng}</p>
        </>
    )
}
//부모
const school = (
    <>
        <Score name="홍길동" math="75" kor="85" eng="67" />
        <Score name="마동석" math="95" kor="75" eng="70" />
    </>
)


ReactDOM.render(school, root1);

//복합배열 데이터를 기준으로 props로 데이터를 전달하여 결과값을 출력한다.
//2차 배열 패턴: ["이름", "수학점수", "국어점수", "영어점수"]
const root2 = document.querySelector("#root2");

const classScores = [
    ["혜리", "45", "65", "75"],
    /*
    ["보겸", "95", "75", "65"],
    ["경표", "95", "90", "95"],
    ["동휘", "25", "45", "35"],
    ["재열", "90", "95", "85"],
    */
];

//자식 컴포넌트
const Score2 = (props) => {
    console.log(props); //Object
    return (
        <>
            <p>{props.name}</p>
            <p>수학 점수 : {props.math}</p>
            <p>국어 점수 : {props.kor}</p>
            <p>영어 점수 : {props.eng}</p>
        </>
    )
}

//부모 컴포넌트
const parentCp = (
    <ul>
        {classScores.map((v, i) => (
            <li key={i} style={{borderBottom: "1px dashed red"}}>
                <Score2 name={v[0]} math={v[1]} kor={v[2]} eng={v[3]}/>
            </li>
        ))}
    </ul>
)



ReactDOM.render(parentCp, root2);

//li(style={{borderBottom: "1px dashed red"}})라는 태그를 활용하여 <h3>이름</h3> <p>각 과목 점수 : </p> * 3




// const Score2 = (props) => {
//     console.log(props);

//     return (
//         {classScores.map((v, i) => (
//             <>
//                 <h2>{v[0]}</h2>
//                 <p>수학 점수 : {v[1]}</p>
//                 <p>국어 점수 : {v[2]}</p>
//                 <p>영어 점수 : {v[3]}</p>
//             </>
//         ))}
//     )
// }