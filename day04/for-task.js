// 브론즈
// 1부터 100까지 출력
// 1부터 100까지 짝수만 출력
// 1부터 100까지 홀수만 출력
// 0~10까지 5만 빼고 출력

// 실버
// 1~10까지 모든 합 출력

// 골드
// 1~n까지 합의 출력
// 012340123401234 출력


// 1부터 100까지 출력
// for(let i = 0; i < 100; i++){
//     console.log(i+1);
// };


// 1부터 100까지 짝수만 출력
// 방법1.
// for(let i = 1; i <= 100; i++){
//     if(i%2===0){
//         console.log(i);
//     };
// };

// 방법2.
// for(let i = 0; i < 100; i++){
//     let even = i % 2 == 0;
//     even ? console.log(i) : ""; // even이 짝수면 출력하고 아니면 아무것도 출력하지마.
// }

// 방법3.
// for(let i = 0; i <= 50; i++){
//     let even = i * 2;
//     console.log(even);
// }

// 방법4.
// for(let i = 0; i < 100; i++){
//     let even = i % 2 == 0;
//     if(even){
//         console.log(i)
//     };
// }

// 방법5.
// for(let i = 0; i < 100; i++){
//     let even = i % 2 == 0;
//     if(!even){ continue };
//         console.log(i);
// }



// 1부터 100까지 홀수만 출력
// for(let i = 0; i < 100; i++){
//     if(i%2===0){
//         console.log(i+1);
//     };
// };

// 0~10까지 5만 빼고 출력
// for(let i = 0; i < 10; i++){
//     let target = i == 5;
//      if(target){
//          continue;
//      }
//      console.log(i);
//  };


// 1~10까지 모든 합 출력
// let result1 = 0; // i들을 모두 더해서 담는 변수
// for(let i = 1 ; i <= 10; i++){
//     result1 += i; // 모두 더해야하니까 누적해서 더한다.
// }
// console.log(result1);


// 1~n까지 합의 출력
// let input = 10; // 사용자가 입력할 값
// let result2 = 0; 
// for(let i = 0; i < input; i++){
//     result2 += i + 1;
// }
// console.log(result2);



//--------------------------------------------------------------
// HW

// 1. 012340123401234 출력

// 알고리즘
// for문 밖에 result 변수를 만들어 result는 문자열이야라고 선언한 뒤
// i를 다 더해서 01234를 만든다.
// 세번 반복하기

// 코드
let result1 = "";
for(let i = 0; i <= 4; i++){
    // console.log(i)
    result1 += i;
}
console.log(result1 + result1 + result1);

//  for(let i = 0; i < 5; i++)
//     // 3번 반복되면 되니 5를 15로 변경해서 넣는다.
//     for(let i = 0; i < 15; i++){
//     // 어떤 값을 5로 나누니 5가 되는 값으로(01234) 계속 나뉘어져 떨어진다.
//     // console.log(i % 5)
//     // result에 이 값을 누적복합 시켜 넣으면 된다.
//        result += i % 5;
// }
// console.log(result);








// 2. 1~10까지 짝수면 짝수입니다, 홀수면 홀수입니다. 출력
// ex) 1은 홀수입니다.
// ex) 2는 짝수입니다.
// ...

// 알고리즘
// 일단 1~10까지 출력한다. (for문 사용)
// 조건이 짝수 or 홀수 걸러낸다. (삼항연산자)

// 코드
const even = "짝수입니다.";
const odd = "홀수입니다.";

for (let i = 1; i <= 10; i++){
    evenOrOdd = i % 2 === 0;
    evenOrOddResult = evenOrOdd ? even : odd;
    result2 = (`${i}은(는)${evenOrOddResult}`);
    console.log(result2);
};



// 3. 100 ~ 1까지 출력

// 알고리즘
// 100부터 1까지니까 초기식에 100을 넣고 조건식에 1을 넣는다.
// 거꾸로 줄어들며 출력되어야하니까 증감식에 -부호를 넣는다.

// 코드
for(let i = 100; i > 0; i--){
    console.log(i)
}



// 4. 1~10까지 5부터는 +2를 시켜서 출력

// 알고리즘
// 1부터 10까지 반복문을 이용하여 출력 (for문)
// 만약에 5라면, 여기부터는 2를 계속 더하라
// 그렇지 않으면 그대로 출력하기

// 코드
for(let i = 1; i <= 10; i++){
    if(i >= 5){
        console.log(i+2)
    }else{
        console.log(i)
    };
};
