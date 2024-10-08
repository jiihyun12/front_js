let b = 10; // 전역변수
function func(){
    if(true){
        let a = 10; // 지역변수
        console.log(a)
    }
    console.log(a)
}
console.log(a)



globalThis.x = 10; // 전역변수 모든 지역 내에서도 모두 같은 변수의 값을 참조하고 싶을 때
function f2(){
    let x = 20; // 지역변수
    globalThis.x = 30;
    console.log(x)
}
f2()
console.log(globalThis.x)