// 1) 1~10까지 누적합 구하기

// 알고리즘
// 1~10까지 배열에 담는다.
// 누적합한다. 

const sumNum = new Array(10).fill(0);
let result1 = 0;
sumNum.forEach((data1, i)=>{
     result1 += i+1;
});
// console.log(result1);


const arr1 = Array.of(1,2,3,4,5,6,7,8,9,10)
let result = 0;
arr1.forEach((data)=>{result += data}) // 반복을 돌려서 누적합을 구한다.
                         // forEach의 return타입은 void이다. return이 없고 기능만 수행하는 메서드이다.
                         // 이 실행한 문장은 값을 result에 담고 반복문이 끝난 상태이니까
                         // 결과값은 result에 담겨있다.
// console.lof(result);


// 2) 1~50까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경 후 출력하기

// 알고리즘
// 1~50까지 배열에 담는다. (map)
// 담은 배열 중 짝수를 걸러낸다. (filter)
// 걸러낸 배열 안의 값에 3을 곱해서 
// 출력한다.


// 2)풀이
// new Array(50).fill(0).map((data, i) => i + 1).filter((data) => data % 2 == 0) // 짝수만 들어가 있는 배열
// new Array(50).fill(0).map((data, i) => i + 1).filter((data) => data % 2 == 0).map((data) => data * 3).forEach((data) => {console.log(data)})
// 배열에서 3을 곱해야하니까 다시 map으로 받아서 곱해준다.
// 이 배열 값을 다시 foreach로 돌려서 출력한다.


// 3) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기

//알고리즘
// 배열에 넣고 sort로 정렬한다.
// reverse로 반대로

const array2 = [10, 20, 30, 40, 50];
const asc = array2.sort((a,b)=>a-b);
const desc = asc.reverse();
// console.log(desc);


// 4) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기

// 알고리즘
// 1~10까지 배열에 담는다.
// 값이 5보다 큰지 비교한다. 
// 크다면 값을 2배로 변경한다.
// 원본 배열을


const arr2 = new Array(10).fill(0);
res2 = 0;
arr3 = arr2.map((data,i)=>{
    return res2 += i + 1 // 1~10까지 배열에 담기
}).map((data)=>data>5 ? data*2 : data);// data가 5보다 크면 data*2를 하고 아니면 그냥 data
// console.log(arr3);


// 5) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
// ex) let arrTask1 = 1*3*5*7*9...

const arr4 = new Array(30).fill(0);
const arr5 = arr4.map((data,i)=>i+1).filter(data=>data%2==1) // 홀수값만 출력
arr5.join("*") // 홀수값을 문자열값으로 join을 시킨다.


// 6) arrTask1에 들어간 값에 "*"을 제거한 후 배열에 담아 
// arrTask1의 기존의 값을 2배로 변경 후
// 모든 값을 출력하기

let addTask1 = arr5.join("*").split("*") // split을 사용하여 다시 별을 제거하고 배열로 담는다.
// addTask1.map((data)=>data*2).forEach((data)=>{console.log(data)}); // 값을 2배로 변경한 후 값으로 출력한다.


// 7) 1~20까지 배열에 담고 배열에 들어간 값 중 뒤에서 5개 값을 더한 후 출력

const arr7 = new Array(20).fill(0).map((data, i)=> i+1); // 1~20까지 배열에 담는다.
let result4 = 0;
const spliceNum = arr7.splice(-5,5) // 값을 통째로 잘라오는 splice를 사용한다.
                                    // 인덱스값중 뒤에서 5번째까지 5개를 들고와서 
spliceNum.forEach((data)=>result4+=data);    // forEach로 반복을 돌려 누적합한다.
console.log(result4);
