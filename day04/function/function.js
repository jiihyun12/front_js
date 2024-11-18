//  이름을 한 번 출력해주는 함수
// function printName(){
//     console.log("함지현");
// };
// printName();


// 100이라는 값을 주는 함수
// function get100(){
//     return 100;
// };
// get100();


// 두 수를 합쳐서 결과값을 주는 함수
// function add(num1, num2){
//     return num1 + num2;
// };
// add(10,20);


// 1. 성과 이름을 받아서 붙여주는 함수
function getFullName(lastName, firstName){
    let fullName = lastName + firstName;
    return fullName;
 };
 let name = printName("홍", "길동"); // return값이니까 변수에 담을 수 있다.
 console.log(name);


// 2. 이름을 출력해주는 함수
function printName(name){
    console.log(name); // 출력은 값이 아니므로 return을 쓰지 않는다.
 };
 printName("홍길동");


// 3. 이름을 10번 반복해주는 함수
function printNameToTen (name){
    for(let i = 0; i <=10; i++){
        console.log(name)
    };
};
printNameToTen("함지현");


// 매개변수, 파라미터, 인자



// 4. 숫자 5개를 받아서 3개만 더하기
// 디폴트 파라미터 
function add(num1, num2, num3, num4, num5){
    return num1 + num2 + num3 + num4 + num5;
 };
 add(10,20,30);
 
//  이렇게 하게 되면 NaN가 나온다.
//  매개변수 갯수가 5개인데 값을 세 개만 넣었으니
//  나머지 두 공간에는 값이 없으니까 undifined가 들어가고
//  언디파인드에 정수를 더하니 Not a Numbur가 나온다.
 
//  사용자가 이 값에 아무것도 넣지 않아도 
//  모든 결과값을 주기 위해 초기값을 넣어준다.
//  이것을 디폴트 파라미터라고 한다.
 function add(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0){
    return num1 + num2 + num3 + num4 + num5;
 };
 add(10,20,30);
 



// 5. 숫자 3개를 받아서 모두 곱해주는 함수
    function multi(num1, num2, num3){
        return num1 * num2 * num3;
    }
    multi(1,2,5);

// 5-1. 모든 결과에 10을 곱해주기
    function return10(){
        return 10;
    } // 10값을 return해주는 함수

    function multi2(num1, num2, num3, num4 = return10()){
        return num1, num2, num3, num4;
    }
    let result2 = multi(10,10,10);

    



// 6. 숫자 2개를 받아서 더하고 출력해주는 함수
function two(num1,num2){
    return num1 + num2;
}
let result = two(1,2);
console.log(result);

// ---------------------------------------------------------
// 즉시 사용함수 ()()
// 특징 : 함수명이 없다. 일회성이다.
(function(){
    console.log("선언과 동시에 사용")
})();


// 화살표 함수 ()=>{} (ES6)
// 숫자 2개를 받아서 더하고 출력해주는 함수
function addPrintNum(num1, num2){

};
const addPrintNum2 = (num1, num2) => {

};


// ---------------------------------------------------------
