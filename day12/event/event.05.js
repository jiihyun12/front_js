// input태그 모두 들고 오기
const inputs = document.querySelectorAll("input");
// console.log(inputs); 
// ctrl + shift + r 을 누르면 어떻게 들고왔는지 보인다.
// 유사배열의 형태로 두 개를 들고왔다. 
// 유사배열이란것은 array에 있는 method들을 모두 쓸 수 없을 수도 있다. 필요한 함수들은 필요한 프로퍼티들을 이용해서,
// 프로토 타입을 이용해서 추가를 해 줘야 할 수도 있다는 의미이다.

// button 들고 오기
const button = document.querySelector("button");

// font-size를 25px로 키우기
// border 스타일을 변경하기, solid 2px green
// width 200px
// height 40px

// 단, 방번호로 들고 오지 않는다.
// inputs 반복문을 사용해서 변경하기

NodeList.prototype.forEach = Array.prototype.forEach;

inputs.forEach((item)=>{ // 기능만 추가하는 것이기 때문에 forEach사용
                         // forEach는 callback함수로 앞에 있는 결과물을 순서대로 받는다.
                         // inputs에 들어가있는 값들을 순서대로 받게 된다.
    item.style.fontSize = "25px";
    item.style.border = "2px solid green";
    item.style.width = "200px";
    item.style.height = "40px";
    
    // 스타일을 변경함과 동시에 이 안에서 이벤트를 추가한다.
    item.addEventListener("blur", (e)=>{ // 배열이 아닌 돔에 접근하는것이기때문에 inputs가 아닌 item에 이벤트리스너를 사용한다.
                                        // blur이벤트가 발생했을 때 모든 결과물의 이벤트 객체를 다음 결과물(e)이 받게된다.
       console.log(e.target.value); // 블러가 되었을 때 콘솔에 입력값이 찍힌것을 확인할 수 있다.
    })
})

button.addEventListener("click",()=>{ // 버튼을 눌렀을 때 
    inputs.forEach((input)=>{ // input들의 value를 화면에 뿌릴 수 있다.
        console.log(input.value) 
    })
});