// 1) 
// 입력받은 3개 중 홀수만 모두 더해주는 함수

// 알고리즘
// 3개 입력받기
// 입력 받은 값이 홀수인지 짝수인지 확인하기
// 홀수면 누적합시키기 (누적복합연산자)

// function sumOddNums(num1, num2, num3){
//     let sum = 0;
    
//     if(num1 % 2 === 1){ // num1이 홀수일 때
//         sum += num1; // sum에 num1 추가
//     }
//     if(num2 % 2 === 1){ // num2가 홀수일 때
//         sum += num2; // sum에 num2 추가
//     }
    // if(num3 % 2 === 1){ // num3이 홀수일 때
//         sum += num3 // sum에 num3 추가
//     };
//     return sum; // 최종 값 return
// };
// const result = sumOddNums(1,2,3); // 사용
// console.log(result); // 결과값 출력 후 확인





//2) --------------------------------------------------------------------------------
// 입력받은 수까지 반복 후 짝수의 합을 모두 더해주는 함수

// 알고리즘
// 숫자 하나 입력받기
// 입력 받은 수 까지 반복 돌리기 (for문)
// 입력 받은 수 중 짝수만 누적합시키기

// function sumEvenNum(num){
//     let sum = 0;

//     for(let i = 0; i <= num; i++){
//         let even = i % 2 === 0; // 입력 받은 수 중 짝수
//         if(even){ // 만약에 짝수면
//             sum += i; // sum에 추가하기
//         };
//     };
//     return sum; // 최종 값
// };
// const result2 = sumEvenNum(10); // 사용
// console.log(result2); // 결과값 출력 후 확인




// 3) --------------------------------------------------------------------------------
// 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"

// 알고리즘
// 값을 받는다.(문자열과 지울 문자a)
// 값중에 a라는 문자열이 있는지 찾는다. (for문)
// a를 제외하고 반환한다. (if문)

// function removeCharA(inputStr, inputToRemoveCharA){
//     let result3 = ""; // 결과값 초기화

//     for(let i = 0; i <= inputStr.length; i++){ // 입력한 문자열의 길이만큼 반복문을 돈다.
//         if(i == inputToRemoveCharA) // 문자가 제거할 문자와 같지 않다면
//          i += result3// 누적합시킨다.
//     };
//     return result3;
// };

// const result3 = removeCharA("가a나a다a라a마a바", 'a');
// console.log(result3);




// 4) --------------------------------------------------------------------------------
// 입력한 값이 실수인지 정수인지 알려주는 함수
// parseInt() : 정수로 바꿔주는 함수

// 알고리즘
// 숫자를 입력받고
// 입력 받은 숫자를 진짜 숫자로 바꾼다. (Number)
// 입력 받은 수를 정수로 바꿔서 (parseInt())
// 실수면 "실수", 정수면 "정수", 숫자가 아니면 "숫자가 아닙니다." (if문)

// function inputNums(num){
//     let realNum = Number(num);
//     let intNums = parseInt(realNum);
//     // 타입으로 먼저 비교를 했기때문에
//     //  문자열인지 아닌지를 먼저 비교해주어야한다.

//     console.log(typeof(num))
//     if (typeof(num) == "string"){
//         return "문자열"
//     }else if(realNum === intNums){ // 숫자가 정수와 같으면 정수
//         return "정수"
//     }else if(realNum !== intNums){ // 숫자가 정수와 같지 않다면 실수
//         return "실수"
//     }else{ // 문자도 아니고 숫자도 아닐 경우
//         return "문자가 아닙니다." 
//     };
    
// };
// const result4 = inputNums(20);
// // console.log(Number("ab"), parseInt("ab"))
// console.log(result4);
// 정수와 실수는 구분하지만 숫자가 아닐 경우 알지 못한다.



// 5) --------------------------------------------------------------------------------
// 입력받은 문자를 뒤집어주는 함수
// ex) "abcdefg" -> "gfedcba";

// 알고리즘
// 입력받는다.
// 문자의 길이만큼 반복을 돌아서 반대로 반환한다.

// function reverseStr(inputStr){
//     let str = "";

//     for(let i = 0; i <= inputStr.length; i--){ // 반복문을 거꾸로 돌린다.
//         str += i; // 결과를 str에 추가한다.
//     }
    
//     return str; // 최종 값 반환
// };

// const result5 = reverseStr("abcdefg"); // 사용
// console.log(result5);
// 망함



//----------------------------------------------------------------------
//풀이


// 1) 입력받은 3개 중 홀수만 모두 더해주는 함수

// 입력받은 매개변수가 홀수인지 알아낸다.
// 홀수는 : num1 % 2 == 1

function sumOdd(num1, num2, num3){ // 매개변수를 입력받는다.
  let result = 0;
  num1 % 2 == 1 ? result += num1 : 0; // 홀수로 나눴을 때 맞으면 누적합, 아니면 아무것도 하지 않는다.
  num2 % 2 == 1 ? result += num2 : 0;
  num3 % 2 == 1 ? result += num3 : 0;
  return result;
};

let result = sumOdd(11, 21, 31);
console.log(result)



// 2) 입력받은 수까지 반복 후 짝수의 합을 모두 더해주는 함수

function sumEven(limit){ // 값을 입력받는다. (사용자가 반복할 숫자)
  let result = 0;
  for(let i = 0; i <= limit; i++){ 
    let even = i % 2 == 0; // 짝수
    // even ? result += i : 0; // 짝수일 때 누적합, 아니면 아무것도 하지 않는다.
    // if(even){ result += i };
    if(!even){ continue; }; // 짝수가 아니면 다음 반복으로 넘어가고
    result += i; // result에 누적합
  }
  return result;
}

let result2 = 0;
result2 = sumEven(10);
console.log(result2)



// 3) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"

let input = "가a나a다a라a마a바";
function removeA(content){
  let result = "";
  for(let i = 0; i < content.length; i++){ // 문자의 길이만큼 반복을 돈다.
    if(content.charAt(i) == "a"){ continue; } // "a"랑 같으면 다음 반복으로 넘어가고
    result += content.charAt(i); 
  }
  return result;
}

let result3 = "";
result3 = removeA(input);
console.log(result3)



// 4) 입력한 값이 실수인지 정수인지 알려주는 함수
// parseInt() : 정수로 바꿔주는 함수 // 2.1 --> 2, 6.7 --> 7 실수 부분을 제거해준다.

console.log(parseInt(1.7))
function getFloatOrInt(num1){
  let isInt = num1 == parseInt(num1); // 같으면 정수고 다르면 실수
  let result = isInt ? "정수입니다" : "실수입니다.";
  return result;
}

let result4 = 0;
result4 = getFloatOrInt(11);
console.log(result4);



// 5) 입력받은 문자를 뒤집어주는 함수
// ex) "abcdefg" -> "gfedcba";

function reverse(content){
  let result = "";
  for(let i = 0; i < content.length; i++){ // 사용자가 입력할 문자의 총 길이
    result += content.charAt(content.length - 1 - i); // 총 길이의 마지막 문자를 가져오려면 -1
                                                      // length는 길이를 세기 떄문에 1부터 시작, i는 방 번호이기때문에 0부터 시작
                                                      // 따라서 1을 더 빼준다.

  }
  return result;
}
let result5 = "";
result5 = reverse("abcdefg");
console.log(result5)













