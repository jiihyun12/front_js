// 1. 나이는 상수로 임의로 설정, 삼항연산자를 이용한다
// 2. 값은 모두 변수에 담는다

// 실습 문제
// 나이가 19살 이상이면 "입장 가능" 출력
// 나이가 19살 이하면 "입장 불가" 출력

// 나이가 짝수면 "짝수" 출력
// 나이가 홀수면 "홀수" 출력

// &&, || 연산자를 사용한다.
// || : 앞에 값이 false면 뒤에 값을 초기값으로 넣는다.
// && : 앞에 값이 false면 뒤에 문장을 실행하지 않는다.
// 나이가 16살이면 "당첨" 출력
// 아니면 "꽝입니다."를 출력

// 콘솔 결과 : [본인이름]님은 [입장가능]이며,
// [나이], [홀수], [꽝입니다]

// const age = 27;
// const name = "함지현";

// 나이가 19살 이사이면 입장가능, 19살 이하면 불가
// let go = age >= 19 ? "입장가능" : "입장불가";
// console.log(go);

// 나이가 짝수면 짝수, 아니면 홀수
// let even = age % 2 === 0 ? "짝수" : "홀수";
// console.log(even);

// 나이가 16살이면 "당첨", 아니면 꽝
// let cong = age === 16 ? "당첨" : "꽝";


// console.log(`${name}님은 ${go}이며, \n ${age}, ${even}, ${cong}입니다.`);


// ---------------------------------------------------
// 풀이1.
const age = 17;
const name = "함지현";
const baseAge = 19;
const pass = "입장 가능";
const notPass = "입장 불가";
const even = "짝수";
const odd = "홀수";
const lucky = "당첨";
const unLucky = "꽝";

// const isEven = age % 2 === 0;
// const isLucky = age == 16;
// const isAdult = age >= baseAge ? pass : notPass;
// const luckyResult = isLucky ? lucky : unLucky;
// const evenResult = isEven ? even : odd;
// const result = `${name}님은 ${isAdult},\n${age}, ${evenResult}, ${luckyResult}`;
// console.log(result);


// 풀이2.
// && || 연산자 사용
const isAdult = age >= baseAge;
const isEven = age % 2 === 0;
const isLucky = age === 16;

const result = isAdult && isEven ? "성인이면서 짝수" 
    : isAdult ? "성인이면서 홀수"
        : "성인이 아닙니다.";

console.log(result);




