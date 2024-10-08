// .indexOf() : 해당 문자의 index 번호를 리턴하는 메서드
console.log("abcdef".indexOf("c"))

// .charAt() : 해당 인덱스의 값을 리턴하는 메서드
console.log("abcdef".charAt(2))

// .length : 문자열의 길이
let str1 = "abcd";
console.log(str1.length)
for(let i = 0; i < str1.length; i++){
  console.log(i)
}

// 실습 30분

// 브론즈
// 어떤 값을 받으면 값을 출력해주는 함수
const print = (value) => { // 어떠한 값을 받고
  console.log(value); // 결과값을 화면쪽에 출력
};

print(20); // 함수 사용

// 3개의 정수를 받아서 3개 모두 빼주는 함수
const subtract = (num1, num2, num3) => {
  return num1 - num2 - num3; // 값을 사용해야하니까 return해줘야한다.
}

let result1 = subtract(10, 20, 30); 
console.log(result1); // -40


// 실버
// 홍길동을 n번 출력해주는 함수

const printByHong = (num) => { // 사용자가 몇 번 입력할 지 모르기떄문에 input값을 받는다. 
  let hong = "홍길동";
  for(let i = 0; i < num; i++){ 
    console.log(hong);
  }
};

printByHong(2);



// 골드
// 1~n까지 홀수만 출력해주는 함수
const printOdd = (num) => {
  for(let i = 0; i < num; i++){
    let odd = i % 2 == 1; // num이 홀수인지 짝수인지 구별
    if(odd) { console.log(i) }; // 만약에 홀수면 출력하라.

    // let even = i % 2 == 0; // 두 번째 방법. num이 짝수
    // if(even) { continue }; // 짝수라면 continue(즉시 다음 반복)
    // console.log(i) 
  };
};
printOdd(10);



// 문자열을 입력받고 원하는 문자의 개수를 구해주는 함수

// 문자열을 받는다 (매개변수)
// 문자도 받는다 (매개변수)
// 함수 정의한다
// 문자열의 길이 .length를 이용해서 반복문을 돌린다.
// charAt()을 사용한다.
// 문자랑 비교한다
// 같으면 개수를 센다
// 값을 리턴한다.

// ex) getCount("abcabc", "a") -> return 2
const getCountCharacterInContent = (content, char) => { // conetent : 사용자가 입력한 문자열, char : 문자형
    let count = 0;
    for(let i = 0; i < content.length; i++){ // content중에서 char를 찾아야한다. content의 길이만큼 반복을 돌린다.
      if(content.charAt(i) == char){ // charAt을 사용하여 반복문으로 사용자가 입력한 값과 비교한다. 
        count++; // 이 값과 char이 같으면 그 값을 세주면 된다. (let count = 0이라는 변수를 생성한다.)
                  // 찾을 때마다 count를 증감시켜준다.
      }
    }
    return count; // 반복문이 끝났으면 모든 count를 찾았을테니까 return해준다.
}

let count = getCountCharacterInContent("abcabcabcabc", "a"); // return값
console.log(count);



// 플레티넘
// 한글을 정수로 바꿔주는 함수 (일공이사 -> 1024)

// 공일이삼
const changeToInt = (hangle) => { // 받는 값 hangle
    let hangles = "공일이삼사오육칠팔구"; // 사용자가 hangle을 입력하면 hangles에서 반복을 돌리면서 index를 찾으면 된다.
    let result2 = "";
    for(let i = 0; i < hangle.length; i++){ // 사용자가 입력한 hangle의 길이만큼 반복 돌기
      result2 += hangles.indexOf(hangle.charAt(i)); // indexof로 hangle의 글자가 어디에 있는지 찾기
                                                    // 하나의 변수에 네 개를 담아야하니까 누적합을 시킨다. , 
                                            // 옆으로 연결시키기위해 변수를 빈문자열로 선언한다. (let result = "";)
    };
    return result2;
  };
  let result2 = changeToInt("공삼육칠");
  console.log(result2);
  
  

  // 정수를 한글로 바꿔주는 함수 (1024 -> 일공이사)
  const changeToStr = (num) => {
    let str = "공일이삼사오육칠팔구";
    let result3=""; 
    for(let i = 0; i < num.length; i++){ // 사용자가 입력한 num의 갯수만큼 반복을 돈다.
       result3 += str.charAt(num.charAt(i)); // num에서 charAt으로 i를 가져오면 순서대로 들어오고, 
                                  // 이 값을 str에서 다시 chatAt으로 넘겨준다.
                                  // 그리고 이 값을 다시 result로 누적합시킨다.
    };
    return result3;
  };

  let result3 = changeToStr("1024");
  console.log(result3);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  