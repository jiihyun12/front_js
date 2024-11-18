//  1) 값을 2개 전달 받아서 큰 값, 작은 값을 알려주는 함수

    function getValue (num1, num2){
       let min = 0;
       let max = 0;
       let same = "두 수는 같습니다."
       let result1 = `작은 값${min} 큰 값${max}`

        if(num1 === num2){ // 같은지 비교하고 함수 종료
            return same;
        }else if(num1>num2){ // num1보다 num2가 크면 num1이 max값이고, num2가 min값이다.
            max = num1;
            min = num2;
        }else{ // 둘 다 아닐 때 num2가 max num1이 min
            max = num2;
            min = num1;
        }
        return result1// 함수가 종료될 때 결과값 return
    };
    const result1 = getValue(1,3);
    console.log(result1);



//  2) 정수를 넘기면 홀수인지, 짝수인지 알려주는 함수

function evenOrOdd(num1){
let result2 =  num1 % 2 === 0 ? "짝수" : "홀수"; // 짝수인지 홀수인지 비교
return result2;
};
let result2 = evenOrOdd(45);
console.log(result2);



//  3) 0,1을 마구잡이로 5개 전달했을 때 
//  0과 1의 개수를 알려주는 함수
// ex) myFunc(0, 1, 0, 0, 1)
// ex) 0의 개수 3개, 1의 개수 2개

const getCount = (num1, num2, num3, num4, num5) => { // 
    let countZero = 5;
    let countOne = 0;

    if(num1){countOne++} // 값이 없으면 false(0), 값이 있으면 true(1)이므로 값을 넣어주기만 하면 된다. 
                         // 숫자가 1이 들어오면 true만큼 count가 증가한다.
    if(num2){countOne++}
    if(num3){countOne++}
    if(num4){countOne++}
    if(num5){countOne++}

    countZero -= countOne; 
    return `0의 갯수 ${countZero}, 1의 갯수 ${countOne}`; // 
};

console.log(getCount(0,0,1,1,0));

// ---
// const getCount = (num1, num2, num3, num4, num5) => { // 
//     let countZero = 5;
//     let countOne = 0;

//    num1 && countOne++ // 앞의 값이 true면 뒤의 값을 실행하고, false면 실행하지 않음
//    num2 && countOne++
//    num3 && countOne++
//    num4 && countOne++
//    num5 && countOne++

//     countZero -= countOne; 
//     return `0의 갯수 ${countZero}, 1의 갯수 ${countOne}`; // 
// };

// console.log(getCount(0,0,1,1,0));

//-------------------
// function countZeroOrOne(...args){
//     let countZero = 0;
//     let countOne = 0;

//     for (const num of args){
//         if(num === 0) {
//             countZero++;
//         } else if(num === 1){
//             countOne++;
//         }
//     }
//     return console.log(`0의 개수는 ${countZero}개,\n1의 개수는 ${countOne}개입니다.`);
// }
// countZeroOrOne(0,0,0,1,1);

