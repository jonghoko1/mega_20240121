//상세 페이지에서 제품을 2개 구입하고, 장바구니 버튼을 클릭했다면 - 장바구니로 이동시 제품명, 제품 개수, 가격정보
//페이지간의 데이터 공유

//props(Properties 약자)의 역할은 상태 정보를 갖고 있다면 이 상태 정보를 다른 컴포넌트와 공유 하고자 할 때 전달자의 역할을 함
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
            <h3>{props.name}</h3>
            <p>수학 점수 : {props.math}</p>
            <p>국어 점수 : {props.kor}</p>
            <p>영어 점수 : {props.eng}</p>
        </>
    )
}
//부모 
const school = (
    <div>
        <Score name="홍길동" math="75" kor="85" eng="67" />
        <Score name="마동석" math="95" kor="75" eng="70" />
    </div>
);

ReactDOM.render(school, root1);

//복합배열 데이터를 기준으로 props로 데이터를 전달하여 결과값을 출력한다.
//2차 배열 패턴: ["이름", "수학점수", "국어점수", "영어점수"]
const root2 = document.querySelector("#root2");

const classScores = [
    ["혜리", "45", "65", "75"], //0
    ["보검", "95", "75", "65"], //1
    ["경표", "95", "90", "95"], //2
    ["동휘", "25", "45", "35"], //3
    ["재열", "90", "95", "85"], //4

];

//자식 컴포넌트
const Score2 = (props) => {
    console.log(props); //Object
    return(
        <div data-list={props.name1}>
            <h3>{props.name1}</h3>
            <p>수학 점수 : {props.m}점</p>
            <p>국어 점수 : {props.ko}점</p>
            <p>영어 점수 : {props.eng}점</p>
        </div>
    )
}

//부모 컴포넌트
const parentCp = (
    <ul>
        {classScores.map((v, i) => (
            <li key={i} style={{borderBottom:"1px dashed red", backgroundColor:"#ffa"}}>
                <Score2 name1={v[0]} m={v[1]} ko={v[2]} eng={v[3]}/>
            </li>
        ))}

    </ul>
)

//li(style={{borderBottom:"1px dashed red"}})라는 태그를 활용하여 <h3>이름</h3> <p>과목 점수 : 00점</p> * 3 


ReactDOM.render(parentCp, root2);


//props는 일반적으로 객체화된 상태로 전달이되는데, 만약 props로부터 전달된 값 중 일부만을 사용하고자 할 때는 key를 직접 작성하여 데이터를 추출할 수 있음
const root3 = document.querySelector("#root3");

//props를 대표하여 사용하지 않고, 객체(props) 내의 key값을 기준으로 가져오는 방법
const ChildCp = ({name, age, ...props}) => {
    console.log(name); //김하늘
    console.log(age); //42
    console.log(props); //{region:"서울"}
    return (
        <div style={{backgroundColor: "#aaf"}}>
            <h3>{name}({age})</h3>
        </div>
    )
}
const app3 = (
    <ChildCp name="김하늘" age="42" region="서울" />
);

ReactDOM.render(app3, root3);


//스프레드 연산자 예시
const {a, b, ...spare} = {a: "1", b: "2", c: "3", d: "4"}
console.log(`a : ${a}`);
console.log(`b : ${b}`);
console.log(`spare : ${spare}`);
console.log(`spare.c : ${spare.c}`);
console.log(`spare.d : ${spare.d}`);