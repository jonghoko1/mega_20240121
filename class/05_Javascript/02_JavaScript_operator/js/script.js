document.write("<h2>연산자</h2>");
/*
산술연산자(+, -, *, /, %),
문자결합 연산자(문자 데이터 + 문자 데이터),
대입연산자(변수명=변수값)/
복합대입연산자(+=, -=, *=, /=, %=),
증감연산자(++, --),
비교연산자(<, >, ==, <=, >=, !=, ===, !==),
논리연산자(||, &&, !),
*/
// #1. 산술연산자 : 무조건 숫자형 데이터만 가능하다
document.write("<h3>산술연산자</h3>");
var $num_01 = 12;
var $num_02 = 5;

var rst_01 = $num_01 + $num_02;
document.write('더한값 : ' + rst_01, '<br />');
var rst_02 = $num_01 - $num_02;
document.write('뺀값 : ' + rst_02, '<br />');
var rst_03 = $num_01 * $num_02;
document.write('곱한값 : ' + rst_03, '<br />');
var rst_04 = $num_01 / $num_02;
document.write('나눈값 : ' + rst_04, '<br />');
var rst_05 = $num_01 % $num_02;
document.write('나눈 후 나머지값 : ' + rst_05, '<br />');
/*
    12 % 5 => 2;

    0 % 5 => 0;
    1 % 5 => 1;
    2 % 5 => 2;
    3 % 5 => 3;
    4 % 5 => 4;
    5 % 5 => 0;

    63 % 5 => 3;
    n % 5 = 0이 된 경우, n은 5의 배수
*/
// 남성(1, 3), 여성(2, 4)
var gender = 1; //000000-1234567
document.write(gender % 2, '<br />');
// 결과값이 1이라면 남성, 0이라면 여성
// aribnb에서 호스트(2xxxxxx), 게스트(1xxxxxx)

// #2. 문자결합연산자 : 문자형 + 문자형 => 문자형 / 문자형 + 숫자형 => 문자형
var string_01 = "1200";
var string_02 = "2400";
var number_01 = 1200;

var sum_str = string_01 + string_02;
document.write(sum_str, '<br />');
document.write(typeof sum_str, '<br />');

var sum_multi = string_01 + number_01;
document.write(sum_multi, '<br />');
document.write(typeof sum_multi, '<br />');

var $str_01 = "빙그레 바나나 우유";
var $num_01 = 1;
var $num_02 = 1;

var $result = $str_01 + ($num_01 + $num_02);
document.write($result, '<br />');

// 2+4*3 = 14
// (2+4)*3 = 18
// () : 우선 결합

// #3. 대입연산자 / 복합대입연산자
document.write("<h3>대입연산자 / 복합대입연산자</h3>");
// #3-1. 대입연산자
var first = "홍길동";
var second = first;
var third = second;
document.write(third, '<br />');

// #3-2. 복합대입연산자
var $no_01 = 24;
var $no_02 = 8;

$no_01 += $no_02; // $no_01 = $no_01 + $no_02 =>[해석] 24 + 8 / $no_01 = 32
document.write($no_01, '<br />'); // 32
$no_01 -= $no_02; // $no_01 = $no_01 - $no_02 =>[해석] 32 - 8 / $no_01 = 24
document.write($no_01, '<br />'); // 24
$no_01 *= $no_02; // $no_01 = $no_01 * $no_02 =>[해석] 24 * 8 / $no_01 = 192
document.write($no_01, '<br />'); // 192
$no_01 /= $no_02; // $no_01 = $no_01 / $no_02 =>[해석] 192 * 8 / $no_01 = 24
document.write($no_01, '<br />'); // 24
$no_01 %= $no_02; // $no_01 = $no_01 % $no_02 =>[해석] 24 % 8 / $no_01 = 0
document.write($no_01, '<br />'); // 0

// 복합대입연산자 중에서 중요 포인트 문자간의 연속성을 갖고 있는 결합
var $txt = "a";
console.log($txt); // a
$txt += "b";
console.log($txt); // ab
$txt += "c";
console.log($txt); // abc

// 복합대입연산을 통한 주소의 결합
var address1 = "서울시 서초구 강남대로123 ";
var address2 = "메가스터디 빌딩 3층 1호 ";
var userName = "홍길동";
address1 += address2;
address1 += userName;
console.log(address1);

// 복합대입연산자를 통한 테이블 구성(<table>~<th>~<td> : 1행 3열)
var $t = "<table border='1'>";
$t += "<tr>";
$t += "<td>1</td>";
$t += "<td>2</td>";
$t += "<td>3</td>";
$t += "</tr>";
$t += "</table>";

document.write($t, "<br />");
console.log($t);

// 복합대인연산자를 활용한 이미지 박스 구성하기
var $pd = "";
$pd += "<div class='frame'>";
$pd += "<div class='box'>1</div>";
$pd += "<div class='box'>2</div>";
$pd += "<div class='box'>3</div>";
$pd += "<div class='box'>4</div>";
$pd += "</div>";

document.write($pd, "<br />");
console.log($pd);

// 복합대입연산자를 활용하여 1~10까지 더한 최종값을 화면에 표현하시오. (최종값은 55)
var $no = 1;
// ...
console.log($no);
$no += 2;
console.log($no);
$no += 3;
console.log($no);
$no += 4;
console.log($no);
$no += 5;
console.log($no);
$no += 6;
console.log($no);
$no += 7;
console.log($no);
$no += 8;
console.log($no);
$no += 9;
console.log($no);
$no += 10;
console.log($no);
// ...
document.write($no, "<br />");

// #4. 증감연산자
// 증가 연산자(1씩 더한다) ++변수명, 변수명++
// 감소 연산자(1씩 빼준다) --변수명, 변수명--

var pd_num = 12;
document.write('A 상품의 개수 : ' + pd_num + "개", "<br />");
document.write(`A 상품의 개수 : ${pd_num}개`, "<br />");
// `문자1 ${변수명} 문자2` (백틱)

// 장바구니에서 + 버튼을 1회 클릭 시
++pd_num; // pd_num = pd_num + 1
document.write(`A 상품의 개수 + 1 : ${pd_num}개`, "<br />"); // 13
// 장바구니에서 + 버튼을 "최초에서" 2회 클릭 시
pd_num++; // pd_num = pd_num + 1
document.write(`A 상품의 개수 + 1 : ${pd_num}개`, "<br />"); // 14

// 장바구니에서 - 버튼을 1회 클릭 시
--pd_num; // pd_num = pd_num - 1
document.write(`A 상품의 개수 - 1 : ${pd_num}개`, "<br />"); // 13
// 장바구니에서 - 버튼을 "최초에서" 2회 클릭 시
pd_num--; // pd_num = pd_num - 1
document.write(`A 상품의 개수 - 1 : ${pd_num}개`, "<br />"); // 12

// 증감연산자 - 선행처리(++변수명 또는 --변수명) vs 후행처리(변수명++ 또는 변수명--)
// 선행처리(++변수명 또는 --변수명)
var $a = 10;
var $b;
$b = ++$a;
document.write(`$a의 결과값 : ${$a}`, '<br />'); // 11
document.write(`$b의 결과값 : ${$b}`, '<br />'); // 11
// 후행처리(변수명++ 또는 변수명--)
var $c = 10;
var $d;
$d = $c++;
document.write(`$c의 결과값 : ${$c}`, '<br />'); // 11
document.write(`$d의 결과값 : ${$d}`, '<br />'); // 10


var a = 1;
a = a++;
console.log(a);
// console.log(b);


// #5. 비교연산자 : 결과값은 true 또는 false
document.write("<h3>비교연산자</h3>");
var $p = 10;
var $q = 12;
var $r = "10";

var $result_than;
$result_than = $p <= $q; // 10 <= 12
document.write($result_than, "<br />");

$result_than = Number($r) <= $q;
document.write($result_than, "<br />");

// 같다(==) : 데이터의 타입에 관계없이 화면상 출력되는 값이 같다면 동일여부로 판단
// 정말~같다(===) : 데이터의 타입과화면상의 출력되는 모두 같아야 동일 여부로 판단
$result_than = $p == $r;
document.write($result_than, "<br />");
$result_than = $p === $r;
document.write($result_than, "<br />"); // false

// 주의사항 :
// (변수명 >= 변수명) ===> 비교연산자
// (변수명 => 변수명) ===> 화살표 함수

// #6. 논리연산자 : ||(or 연산자 - 구글 검색), &&(and 연산자 - 하나투어), !(부정연산자 - 데이터의 유무를 판단하는 조건으로 적용 가능)

var $s = 10;
var $t = 12;
var $u = 14;

// or 연산자
document.write($s > $t || $t < $u, "<br />");
// false || true => true
// 하나라도 true가 존재하면 모두 true 처리한다.
// true || false => true ==> 로딩상 맨처음 true가 || 연산자를 만나는 순간 그 후발주자는 로딩하지 않음 => 절대적으로 true인 부분은 맨 뒤에 배치한다.

// and 연산자
document.write($s > $t && $t < $u, "<br />");
// false || true => false
// 하나라도 false가 존재하면 모두 false 처리한다.
// false || true => false ==> 로딩상 맨처음 false가 && 연산자를 만나는 순간 그 후발주자는 로딩하지 않음 => 절대적으로 false인 부분은 맨 뒤에 배치한다.

// 부정연산자(!변수명) : 변수가 true 였다면 false 로 출력해라 / 변수가 false 였다면 true 로 출력해라
var $v = 10 > 8;
document.write(`부정연산자 ${!$v}`, "<br />"); // false
var $data = Boolean("a");
console.log($data); //true
console.log(!$data); //true

// #7. 삼항 조건 연산자 : 변수명의 true 또는 false에 의해서 실행되는 구문을 분리
// 변수명 ? "A" : "B"
// 변수명의 값이 true 일 경우, "A"를 출력
// 변수명의 값이 false 일 경우, "B"를 출력

// var thanMore13 = prompt("나이를 입력해 주세요.", "13");
// var registerPermit = thanMore13 > 13;
// console.log(registerPermit);
// registerPermit ?
//     console.log("가입 가능 연령입니다.")
//     :
//     console.log("가입 불가 연령입니다.");

// 응용파트 : airbnb 회원 아이디 중 첫번째 번호를 기준으로 호스트(1xxxxx), 게스트(2xxxxx) 분류시켰다고 가정시
var memIdNum = 1;
memIdNum % 2 == 0 ?
    document.write("게스트 메뉴", "<br />")
    :
    document.write("호스트 메뉴", "<br />");

// react 에서는 제어문 중 조건문을 사용 시 if()문을 사용할 수 없음(에러처리) / 대신 삼항 조건 연산자로 조건식을 구성할 수 있음
