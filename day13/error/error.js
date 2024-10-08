// 오류 또는 예외, 그리고 에러
try {
  let number =++ 10;
  console.log(number)
} catch (error) {
//   // name, message, stack
//   // instanceof 앞에있는 객체와 타입을 비교한다
//   // 객체 instanceof 타입
  if(error instanceof ReferenceError){
    console.log("객체의 레퍼런스 오류가 발생했어요!")  
  }else if(error instanceof SyntaxError){
//     // SyntaxError
//     // 자바스크립트 엔진이 해석할 수 없는 오류같은 경우 동작하지 않는다.
//     // 런타임 오류만 잡을 수 있다.
    console.log("문법적인 오류가 발생했어요!")
  }
}

// 몇 초 뒤에 실행하는 함수
// setTimeout(콜백함수, 초(1000))
// try{
//   setTimeout(() => {
//     console.log(a)
//     let a = 100;
//   }, 2000)

// } catch (error) {
//   // 비동기로 발생한 코드를 try~catch문으로 잡을 수 없다.
//   if(error instanceof ReferenceError){
//     console.log("레퍼런스 오류 발생!")
//   }

// } finally {
//   console.log("무조건 한 번 실행!")
// }


// 해결한 코드
setTimeout(() => {
    try{
      console.log(a)
      let a = 100;
    } catch (error) {
      // 비동기로 발생한 코드를 try~catch문으로 잡을 수 없다.
      if(error instanceof ReferenceError){
        console.log("레퍼런스 오류 발생!")
      }
    } finally {
      console.log("무조건 한 번 실행!")
    }
  }, 2000)
  
  
  
  
  