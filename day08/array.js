// 배열을 생성하는 방법
const array = [];
const arr = new Array();

const array1 = [10, 20, 30, 40, 50];
// console.log(array1[4]); // 50

const array2 = new Array(); // 프로토 타입

const array3 = new Array(10) 
// 프로토타입으로 값을 넘겨주면 길이가 된다.
// 길이를 알고 있을 때 사용한다.
// console.log(array3) // 10칸짜리 빈 방 생성


// --------------------
// .fill("초기값") 
const array4 = new Array(10).fill(false)
// console.log(array4) // fill을 사용해서 false값으로 방을 다 채웠다.


// --------------------
// .of("초기값1", "초기값2", ...)
const array5 = Array.of("1","2","3"); 
// console.log(array4);


// --------------------
// length 
// 길이를 확인
// console.log(array3.length);


// --------------------
// .split() , string메서드
// 전달된 매개변수를 기준으로 잘라서 배열로 리턴한다.
// 아무것도 전달하지 않으면 모두 자른다.
const phone = "010-9999-5555";
let array6 = phone.split("-");
// console.log(array5);


// --------------------
// join() , array메서드
// 전달된 매개변수를 기준으로 붙여서 새로운 문자열로 리턴한다.
// 아무것도 넘기지 않으면 그냥 붙여준다.
let phoneNumber = array5.join(""); // 배열에 있는 콤마를 빼버리고싶어서 빈문자열을 넣었다.
// console.log(phoneNumber);
// console.log(array5[1]); // 9999만 출력


// --------------------
// .replace(바꾸고싶은 값, 바뀌는 값) , string메서드
// 전달된 매개변수 중 제일 먼저 만나는 값을 찾아서 치환한다.
// 제일 먼저 만나는 값을 변경한다.
const result1 = phone.replace("9", "*"); // 9999 --> *999
// 모두 바꾸려면 replaceAll을 사용한다.
const result2 = phone.replaceAll("9", "*"); // 9999 --> ****
// console.log(result2);


// --------------------
// 추가
// .push(), array메서드
// 배열에 값을 밀어 넣는 것
// 기존 배열에 값을 맨뒤에 추가한다.
const arr1 = ["함지현", "홍길동", "장보고"];
arr1.push("김철수");
arr1.push("김철수", "흰둥이", "짱구"); // 여러개를 넣을수도 있다.
// console.log(arr1); 


// .concat(), array메서드
// 두 개의 배열을 합쳐서 *새로운 배열*로 리턴한다.
// 새로운 배열로 리턴하는것은 주소값이 바뀌는것이다.
const arr2 = ["기서", "병욱"];
const arr3 = arr1.concat(arr2);
// console.log(arr3);

// .unshift() , array메서드
// 맨 앞에 값을 추가하는 메서드
arr3.unshift("김영희");
// console.log(arr3);


// --------------------
// 제거
// .pop()
// 맨 마지막의 요소를 제거(추출), 마지막 값을 리턴

// 제거하면서 동시에 그 값을 들고있다.
// console.log(arr3.pop) // 병욱
arr3.pop()
// console.log(arr3); // 병욱 삭제


// .shift(), array메서드
// 맨 앞의 요소를 추출, 맨 앞의 값을 리턴
// console.log(arr3.shift()); // 김영희
// console.log(arr3); // 김영희 삭제


// .slice(startIndex, endIndex) , array메서드
//  startIndex부터 endIndex 직전 인덱스 번호까지 요소를 복사해서 [새로운 배열]로 반환해준다.
// 단, 매개변수를 1개 전달하면 startIndex부터 끝까지 가져온다. 
// 얕은 복사, 새로운 배열로 리턴한다.
// endIndex 전까지 가져온다.
// console.log(arr3.slice(2,5)); 
// console.log(arr3);
// 값에 변화가 없다. 복사해서 가져오는것이다.

// console.log(arr3.slice(4)); // 4번방부터 끝까지 들고온다.
// console.log(arr3.slice(-2)); // 뒤에서부터 가져오고싶을 땐 -(마이너스)로 전달
// console.log(arr3.slice(-4, -1)); // -4부터 -1까지


// .splice(startIndex, delCount, addItems) , array메서드
// 
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr4.splice(2, 3)); // 그대로 잘라서 들고온다.
// console.log(arr4); 
// 원본 배열에서도 2부터 4가 사라졌다. 잘라내서 가져오는것이다.

console.log(arr4.splice(3, 0, 10)); // 3 바로 뒤에 10이라는 값을 추가하기.

// console.log(arr4.splice(4,1,50)) // 5를 50으로 바꾸고 싶을 때
// console.log(arr4);               // 인덱스 4번에 있는 친구 하나를 50으로 바꿔라
                                 


// --------------------
// 샤샤샥
// 뭔가를 잘라서 대체하는
// split
// splice
// slice


// --------------------
// 정렬
// .sort()
// 무작위로 들어간 데이터 값을 정렬하는 메서드
const arr5 = [150, 100, 20, 30, 500, 10, 200, 30, 70, 80];
// console.log(arr5.sort()) 출력하면 // 결과값이 [100, 15, 150, 20, 200, 40, 600,700]으로 출력된다
// 왜냐하면 유니코드 방식으로 컴퓨터 언어를 정렬하기 때문이다.
// 숫자 타입을 문자타입으로 형변환 정렬을 하므로 실제로는 문자열로 인식이 되어있다.
// 따라서 
// 앞의 값과 뒤의 값을 받아서 두 개가 큰지 작은지 비교한 후
// 앞의 값이 나보다 크면 뒤로 넘기는 형태로 
// 계속 정렬해서 바꾸도록 콜백함수를 사용한다.
// console.log(arr5.sort((a,b) => a - b)); // 오름차순 정렬

// .reverse()
// 반대로 출력
// ex) 좋아요 많은 순, 댓글 많은 순 등에 쓸 수 있다.
// console.log(arr5.sort((a,b) => a - b).reverse()); 
// 정렬을 하고 뒤집으면 반대로 내림차순 정렬이 된다.


// .includes() , string 메서드
// 값을 찾아오는 역할
const str1 = "말티푸는 푸들과 말티즈가 합쳐진 견종입니다.";
// str1.includes("푸들") ? console.log("있음") : console.log("없음");


// ------------------------------------------------------------------------------
// 배열의 고차함수

// .forEach((data, i, array)=>{}) 
// 반복문
// data : 현재 처리해야할 값
// i : 인덱스
// array : 배열
// i를 활용하여 iterable(순서가 있는)한 key값에 접근할 수 있다.

const arr6 = [10, 20, 30, 40, 50, 60, 70];
arr6.forEach((data , i, array) => {
// console.log(data) 
// 반복의 형태로 출력이 된다.

// foreach를 쓰는순간 순서대로 배열의 값들에 접근을 한다.
// 0번부터 배열의 길이가 끝날때까지 반복을 돌면서
// 처음에 들어오는 매개변수(data)값에 넣는다.

// console.log(i)
// 인덱스값으로 출력이 된다.

// console.log(array)
// 배열 통째로 출력이 된다.
}); 


// data에 접근해서 제곱으로 만들어주는 함수;
// 기존 값을 제곱으로 변경하기

// console.log(arr6); // 원래 배열값
arr6.forEach((data, i, array) => { 
    // array[i] = data * data;
    array[i] *= array[i]    // array에 접근해서 index값으로 누적합시킨다.
});
// console.log(arr6);


// --------------------
// .map()
// 반복문
// 반복을 통해 값에 접근하고, [새로운 배열]로 return한다.
// 반드시 return값이 있어야한다.

// return값을 모아서 다시 새로운 배열로 반환해준다.

arr6.map((data, i, datas)=>{ return data + 10 });
// 통째로가 배열값이다. 그래서 변수에 담을 수 있다.
let result = arr6.map((data, i, datas)=>{ return data + 10 });
// console.log(result); 
let res = arr6.map((data, i, datas)=> data + 10);
// console.log(res);

// 값을 2배로 바꿔주는 map 함수 구현
const arrData2 = Array.of(5, 6, 7, 8, 9, 10);
const arrData3 = arrData2.map((number, i, numbers)=> {
    // return number * 2;
})
// console.log(arrData3)

// 어떤 값을 새로 return하고싶을 때는 map사용
// 기능을 구현하고싶을 떄에는 forEach를 사용

// 함수에서 중괄호가 생기면 return이라는 키워드를 통해 어떤 값을 return할지 적어야하고,
// 중괄호가 없으면 통째로 return값으로 봐야한다.



// --------------------
// .filter()
// 조건이 true인 값만 모아서 새로운 배열로 리턴한다.

// 배열의 일부에 대한 얕은 복사본을 생성하고,
// 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링을 한다.
// 조건이 true인 값을 새로운 복사본으로 생성한다.
// 반드시 리턴 값이 필요하다.

let result3 = arr6.filter((data, i, datas) => data % 4 == 0)
// console.log(result3); // 해당값이 4의 배수인 값만 모아진 배열


const arrData1 = [3, 10, 17, 21, 40, 2, 27];
const result4 = arrData1.filter(function (data) {
    return data % 2 == 0;
});
// console.log(result4); // 짝수만 필터링


// --------------------
// .indexOf() 
// 값을 해당하는 Array에서 찾은 뒤 인덱스 번호를 리턴, 못찾으면 -1을 리턴
// console.log(arrData1[arrData1.indexOf(40)]) 
// console.log(arrData1[arrData1.indexOf(40000)])


// --------------------
// .find(callback)
// 조건식에 만족하는 첫 번째 값을 반환한다.
// 마지막 값을 반환하려면 findLast();
const result5 = arrData1.find((data) => {
    return data < 30;
});
// console.log(result5); // 3


// --------------------
// .from()
// 유사 배열 객체를 배열로 바꿔주는 함수
const obj = {
    0: "1번 값",
    1: "2번 값",
    2: "3번 값",
    3: "4번 값",
    length: 4,
};

// const arrData4 = Array.from(obj);
// console.log(arrData4);
// 배열로 바뀌어서 출력























