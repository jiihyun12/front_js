// 1부터 100까지 출력


// 1부터 100까지 짝수만 출력


// 1부터 100까지 홀수만 출력
for(let i = 0; i<100; i++){
    if(i%2 !== 0){
        console.log(i)
    }
}



// 0~10까지 5만 빼고 출력



// 1~10까지 모든 합 출력


// 1~n까지 합의 출력



// 012340123401234 출력



// 1~10까지 짝수면 짝수입니다, 홀수면 홀수입니다. 출력
// ex) 1은 홀수입니다.
// ex) 2는 짝수입니다.
// ...




// 100 ~ 1까지 출력


// 1~10까지 5부터는 +2를 시켜서 출력



// 빠른 for문을 이용하여 모든 유저의 point를 누적한 결과를 출력하기
// 10분

// const users = {
//     user1 : {
//         name : "홍길동",
//         age : 20,
//         point : 3000
//     },
//     user2 : {
//         name : "이순신",
//         age : 30,
//         point : 5000
//     },
//     user3 : {
//         name : "장보고",
//         age : 25,
//         point : 10000
//     },

// };


// --------------------- object

// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
// 유저의 이름만 모두 출력한다.
// 유저의 포인트를 모두 출력한다. 

function User(name, age, point){
    this.name = name;
    this.age = age;
    this.point = point;
}

const market = new Object();
const user1 = new User("홍길동",30,3500);
const user2 = new User("이순신", 22, 0);
const user3 = new User("장보고",66,9500);

market.user1 = user1;
market.user2 = user2;
market.user3 = user3;

for(let i in market){
    console.log(market[i].name)
}
for(let i in market){
    console.log(market[i].point)
}

function User (name, age, point){
    this.name = name;
    this.age = age;
    this.point = point;
};

