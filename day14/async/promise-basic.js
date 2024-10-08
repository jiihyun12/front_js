// promise는 비동기 코드의 결과타입이 대부분 promise타입으로 온다.

const promise = new Promise((resolve, reject)=>{ // 성공했을 때 resolve 호출, 실패했을 때 reject 호출
    // let check = true; 
    let check = false;
    if(check){  // let check가 true면 resolve가 호출되어 "결과 성공" 메시지가 출력된다.
        resolve("결과 성공")
    }else{  // let check가 false면 reject가 호출되어 "결과 실패" 메시지가 출력된다.
         reject("결과 실패")
    }
});

promise.then((result)=>{ // promise가 성공적으로 이행되면 호출된다.
    console.log(result)
}).catch((error)=>{ // promise가 실패했을 때 호출된다.
    console.error(error)
});

// 성공 데이터는 resolve에 들어가 있고, then에서 잡는다.
// 실패 데이터는 reject에 들어가있고, catch가 잡는다.