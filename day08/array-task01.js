// 35분
// 1) 1~10까지 Array객체에 담은 후 짝수만 출력하기

const arrNumbers = [1,2,3,4,5,6,7,8,9,10];
const resultEven = arrNumbers.filter((data)=> data % 2 === 0);
// console.log(resultEven);

// 1) 풀이
// 10칸짜리 방을 만들어서 fill로 0으로 채운다..
// 길이만큼 반복을 돌린다.
// 새로운 배열로 만들어야하기 때문에 datas에서 map으로 반복을 돌린다.
// data와 index를 받고 return을 한다.
// i+1을 하면 0~9까지 들어오던 게 1부터 10까지 들어오게 된다.
// 여기서 filter를 사용해서 짝수만 걸러낸다.
// foreach를 사용하여 배열을 하나씩 출력한다.

// const datas = new Array(10).fill(0);
// const result = datas.map((data, i) => i + 1).filter((data) => data % 2 == 0);
// result.forEach((data) => {
//   console.log(data)
// })


//---------------------------------------
// 2) 한글을 숫자로
// ex) "일이삼사" -> "1234"

// 알고리즘
// 한글을 입력받으면
// split으로 한글을 자른다.
// map으로 반복 돌려서 각 문자를 인덱스값으로 바꾼다.
// join으로 잘라진 친구들을 연결한다.


// 2) 풀이
const hangles1 = "공일이삼사오육칠팔구";

const input = "일칠팔오";
input.split("").map((data) => hangles1.indexOf(data)).join(""); // hangles에 indexOf로 data를 넘긴다.
                                                               // join으로 문자열값으로 바꾼다.



//---------------------------------------
// 3)숫자를 한글로
// ex) "1234" -> "일이삼사"

// 알고리즘
// 숫자를 생성한다.
// 숫자를 입력받고 자른다.


// 3) 풀이
const hangles2 = "공일이삼사오육칠팔구";
const input2 = "1785";

// charAt() : 해당 인덱스의 값을 리턴하는 메서드
input2.split("").map((data)=>hangles2.charAt(data)).join( ) // hangles2에 charAt으로 data넘긴다.
// console.log(result2);





//---------------------------------------
// 1~100까지 합을 출력
// 100칸짜리 배열을 만든다.

// 알고리즘
// array로 100칸짜리 배열을 만들어서 fill로 채운다.
// forEach 

const array100 = new Array(100).fill(0); // 길이를 알고있으니까 프로토타입으로 만들고 fill로 채운다.
let result1 = 0;
array100.forEach((data1, i)=>{ // 반복문을 돌린다.
    return result1 += i+1 // 인덱스는 0부터 시작하니까 +1
});
// console.log(result1);

// let result = 0;
// for(let i = 1; i <= 100; i++){
//     result += i;
// };
// console.log(result1);

// 풀이)
const arr100 = new Array(100).fill(0);
result3 = 0;
arr100.map((data, i) => i + 1).forEach((data)=>{result3 += data}); // map은 return type들을 모아서 하나의 새로운 배열로 만드는것
                                                                   // 일단 처음에 array는 0으로 다 차있기때문에
                                                                   // map의 data는 순서대로 모두다 0이 들어온다.
                                                                   // index값은 방번호가 0부터 순서대로 증가하고있으므로
                                                                   // data를 사용하는것이 아니라 index값을 사용한다.
                                                                   // 방번호는 0부터 시작하므로 0~99까지 100개가 들어오게되는데,
                                                                   // 지금 1부터 사용하고싶으니까 index값에 +1을 해주면 
                                                                   // 1~100까지 순서대로 들어온다.
                                                                   // map은 return값이 배열이기때문에 지금
          // arr100.map((data, i) => i + 1).forEach((data)=>{result3 += data}); === [1,2,3,4,...100].forEach((data)=>{result3 += data});
                                                                   // 이라고 보면 된다.
                                                                   // 이제 합을 구해야하기때문에 map의 return값에서 다시 반복문을 돌려 누적합한다.
                                                                   

// console.log(result3);


//---------------------------------------
// 문자열을 반대로 출력하기 .reverse()
// "apple"

// 알고리즘
// apple을 split으로 자른다.
// reverse로 반대로 만든다.
// join으로 붙인다.

const apple = ("apple");
const result2 = apple.split("").reverse().join(""); // reverse는 array의 메서드이다.
                                                    // split으로 잘랐을 때 return type이 배열이기 때문에 reverse메서드를 사용할 수 있다.
                                                    // 배열값을 다시 문자열로 바꾸기 위헤 join으로 붙인다.
// console.log(result2);


//---------------------------------------
// 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1111-4455
// result) 010-****-4455

const nums = "010-1111-4455";
const splitNums = nums.split("-"); // 하이픈을 기준으로 자른다. 
const replaceRes = splitNums.map((data)=>data.replaceAll("1","*")) // 반복문을 돌리고 숫자 1을 모두 *으로 바꾼다.
result6 = replaceRes.map(data=> data.replace("1","*")); // 010의 1까지 모두 *로 바뀌기때문에 다시 replace를 사용해서 첫번째 1만 *로 바꾼다.
console.log(result6);

const phone = "010-1111-4455";
let parsePhone = phone.split("-");
parsePhone[1] = "****";
const result = parsePhone.join("-");
console.log(result);
