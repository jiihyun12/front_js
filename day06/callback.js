// 두 수를 더해서 출력하기
// const add = (num1, num2, callback) => { // 매개변수를 세 개 받는데, 두 개는 값이고 하나는 함수로 받는다.
//                                         // num1과 num2를 더했을 때 두 개를 더한 값을 
//                                         // 다음에 오는 함수의 매개변수값으로 보내주는 것
//     callback(num1+num2); 
// }

// const print = (value) => {
//     console.log(value)
// }

// add(20,30, print); // 함수를 사용하는것이 아닌, 함수 그대로를 넘겨줌
//                   // 그대로 value값으로 들어온 값을 출력해준다.




// // 성과 이름을 받아서 연결하고 출력해주는 함수
// const getFullName = (lastName, firstName, callback) => {
//     callback(lastName+firstName);
// };

// getFullName("함","지현", print);



// // 두 정수의 덧셈 결과를 출력
// const add2 = (num1, num2,callback) => {
//     callback(num1+num2)
// };
// const printT = (value) => {
//     console.log(value)
// };
// add(10,20,printT);



// // 두 정수의 곱셈 결과를 출력
// const mulT = (num1, num2, callback) => {
//     callback(num1 * num2);
// };
// const printF = (value) => { 
//     console.log(value)
// }
// mulT(10,4,printF);



// // 성과 이름을 전달받아서 "000님 환영합니다"를 출력
// const hello = (lastName, firstName, callback) => {
//     callback(lastName + firstName) 
// }
// const printV = (value) => {
//     console.log(`${value}님 환영합니다.`)
// }
// hello("함","지현",printV);






// // 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
// const addD = (num1, num2, callback) => {
//     callback(num1+num2)
// };

// const isEven = (num1, callback) => {
//     let result = num1 % 2 === 0 ? "짝수" : "홀수";
//     callback(result);
// };

// const printR = (result) => {
//     console.log(result);
// };

// addD(20, 30, (result)=>{ // 매개변수 두 개와 콜백함수 하나를 넘겨야하는데 
//                         // 이 자리에 콜백함수를 그냥 받게되면 isEven의 결과값함수가 받아야한다,
//                         // 근데 그냥 isEven이라는 함수가 결과값과 콜백함수 매개변수 두 개를 받아야한다. 
//                         // 그럼 isEven도 콜백함수 하나를 더 받아야하는데, 원래 add의 콜백함수 자리이므로 함수를 사용할 수 없다.
//                         // 따라서 콜백함수인 익명함수를 써서 result값을 넘긴다. 
//                         // 두 개를 실행하고 난 결과값을 result로 넘기는 것. 즉, num1+num2 가 result값으로 넘어온 것이다.                
//                         // 만약에 add에다가 20,30넣고 isEven을 콜백함수로 넘기면 매개변수 결과값이랑 print함수를 넘길 수 없다.
//                         // 그래서 콜백함수를 받는것이다.
//     isEven(result,printR)
// });



// -------------------------------------------------------
// 1) 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
const mul = (num1,num2,callback) => {
    callback(num1*num2);
};
mulResult(1,2,function(result){ //print함수를 선언하지 않고 callback함수로 resultr결과값을 받는 방식
    mul(result,(result)=>{ 
        console.log(result)
    });
});

// 풀이
// const multiply = (num1, num2, callback) => {
//   callback(num1 * num2)
// }

// const multiplyBy2 = (num, callback) => { // num값을 받아서 callback함수에게 *2를 해서 넘긴다.
//   callback(num * 2)
// }

// const print = (result) => { 
//   console.log(result)
// }

// multiply(1, 2, function(result){ // multiply함수를 사용할 때 num1값, num2값, callback함수를 사용해야하는데, 
                                    // 콜백함수는 익명함수이므로 funtion(){}이 형태로도 들어갈 수 있다.
                                    // 그런데 이미 함수를 콜백함수에게 넘겨주었을 때 다음에 실행될 로직이 있다.
                                    // 거기서 이미 num1과num2의 결과값을 callback함수가 받는다고 했기 때문에
                                    // 이 곳의 callback함수가 이 결과값을 받게된다.
                                    // 받았다면 함수의 실행 로직에서 사용할 수 있다.

//   multiplyBy2(result, print) // 함수를 사용한다.        
//   })
// })




// 2) 두 정수의 값 중 작은 값을 반환하여 출력
const lowNum = (num1, num2,callback) => {
    callback(num1 < num2 ? num1 : num2);
};
const print2 = (result) => {
    console.log(result);
};
lowNum(2,6,print2);

// 풀이
// const getMin = (num1, num2, callback) => {
//   if(num1 == num2) {
//     callback("두 수가 같습니다.")
//   }else if(num1 > num2){
//     callback(num2)
//   }else{
//     callback(num1)
//   }
// }

// getMin(10, 20, (result) => {
//   console.log(result)
// })



// 240830-day07------------------------------------------------------------------------------

// 3)
// 결제 상품 이름과 결제 상태를 전달 받아서
//    결제 상태가 true일 경우 결제 완료, false일 경우 결제 취소를 출력
const nameAndStatus = (name,status,callback) => {
    callback(status ? "결제 완료" : "결제 취소")
}
const print3 = (result) => {
    console.log(result);
};
nameAndStatus("상품명", true, print3 );

// 풀이
// 결제 상태가 ture일 경우 결제완료 false일 경우 결제 취소를 출력

// const payment = (productName, status, callback) => { 
//   let paymentStatement = status ? "결제 완료" : " 결제 취소"; 
//   result = `${productName}은(는) ${paymentStatement}`;
//   callback(result)
// }

// const print = (value) => {
//     console.log(value)
// };

// payment("선풍기", true, print);



// 4) ------------------------------------------------------------------------------
// 문자열을 받아서 순서를 반대로 바꾼 후 출력 

// 알고리즘
// 문자열을 받는다.
// 문자열의 길이만큼 반복을 돈다.
// 문자를 찾아서 반대로 반환한다.

const reverseStr = (inputStr,callback) => {
    let result = "";
    for(let i = 0; i <= inputStr.length; i++){
        result += inputStr.charAt(inputStr.length -1 -i); // 문자열을 뒤집는다.
    }
    callback(result); // 콜백 호출 
};
const print4 = (result) => { // 결과 출력
    console.log(result)
}
reverseStr("abcdefg",print4);

// 풀이
// const reverse = (content, callback) => {
//   let result = "";
//   for(let i = 0; i < content.length; i++){
//     result += content.charAt(content.length - 1 - i);
//   }
//   callback(result);
// }

// const print = (value) => {
//     console.log(value)
//   }

// reverse("안녕하세요", print)


// 5) ------------------------------------------------------------------------------
// 사용자가 입력한 값까지 누적합 후 5의 배수인지 확인 후 출력

// 알고리즘
// 입력 받는다.
// 입력한 값까지 누적합을 계산한다. (for문)
// 누적합 된 결과가 5의 배수인지 확인한다. (삼항연산자)

const SumNum = (value, callback) => {
    let sumResult = 0;
    for(let i = 0; i <= value; i++){ // 입력한 값까지 반복문
        sumResult += i; // 누적합 계산
    };
    callback(sumResult); // callback함수 호출
};

const print5= (sumResult) => { // 누적합한 값이 5의 배수인지 아닌지 확인하여 출력
    const message = sumResult % 5 == 0 ? `${sumResult}은(는) 5의 배수입니다.` : `${sumResult}은(는) 5의 배수가 아닙니다.`;
    console.log(message);
};

SumNum(10, print5); // 입력값과 콜백함수

// 풀이
// const sum = (limit, callback) => {
//   let result = 0;
//   for(let i = 0 ; i <= limit; i++){
//     result += i;
//   }
//   callback(result)
// }

// const isMultipleBy5 = (num, callback) => {
//   let condition = num % 5 == 0;
//   let result = condition ? "5의 배수입니다" : "5의 배수가 아닙니다";
//   callback(result)
// }

// const print = (value) => {
//     console.log(value)
//   }

// sum(21, (result) => { 
//   isMultipleBy5(result, print) 
// });


// 6) ------------------------------------------------------------------------------
// 1~100까지 짝수만 더한 후 결과 값의 2를 곱한 후 출력

// 알고리즘
// 1~100까지 짝수만 더한다. (for문)
// 더한 결과값에 2를 곱한후 출력한다.

const getEven = (callback) => { // 1~100까지 짝수만 더하는 반복문
    let sum = 0;
    for(let i = 1; i<=100; i++){
        if(i%2 ==0){
            i += sum; // 짝수만 누적합
        };
        callback(sum);
    };
};

const print6 = (result) => { // 결과 값에 2를 곱한 후 출력
    console.log(result * 2);
};
getEven(print6);

// 풀이
// const sumEven = (callback) => {
//   let result = 0;
//   for(let i = 1; i <= 100; i++){
//     let even = i % 2 == 0;
//     if(even){ result += i };
//   }
//   callback(result);
// }

// const multipleby2 = (num, callback) => {
//     callback(num * 2)
// }

// const print = (value) => {
//     console.log(value)
//   }

// sumEven((result)=>{
//   multipleby2(result, print)
// })


// 7) ------------------------------------------------------------------------------
// 2개의 정수 중 최소 값과 최대 값을 비교 후 큰 값에 2를 곱해서 출력

//알고리즘
// 정수 두 개를 받는다.
// 최소값과 최대값을 비교한다.
// 결과값에 2를 곱해서 출력한다.

const isBigger = (num1, num2,callback) => { // 최소값과 최대값을 비교한 후 큰 값 찾기
    let maxNum;
    let minNum;
    if(num1>num2){
        maxNum = num1;
        minNum = num2;
    }else if(num1<num2){
        maxNum = num1;
        minNum = num2;
    }else if(num1==num2){
        return console.log("두 값은 같습니다.");
    }else{
        return console.log("잘못 입력하셨습니다.");
    }
    callback(maxNum);
};

const print7 = (result) => {
    console.log(result * 2);
};

isBigger(10,20,print7);

// 풀이
// const getMax = (num1, num2, callback) => {
//     if(typeof(num1) !== "number" || typeof(num2) !== "number"){
//       return console.log("잘 못 입력하셨습니다.")
//     }
  
//     if(num1 == num2){
//       "두 수는 같습니다."
//     }else if(num1 > num2){
//       callback(num1)
//     }else{
//       callback(num2)
//     }
//   }

// const print = (value) => {
//     console.log(value)
//   }
  
//   getMax(10, "글자", (result) => {
//     multipleby2(result, print)
//   })




