// input태그 모두 들고 오기
const inputs = document.querySelectorAll("input");

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

HTMLCollection.prototype.forEach = Array.prototype.forEach;

// 단, 방번호로 들고 오지 않는다.
// inputs 반복문을 사용해서 변경하기




// 버튼을 눌렀을 때 
// input들의 value를 화면에 뿌릴 수 있다.

