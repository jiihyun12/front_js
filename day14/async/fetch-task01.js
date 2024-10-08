// https://jsonplaceholder.typicode.com/users
// 1. 데이터 요청해서 콘솔에 users 출력하기
// 2. users에 name만 콘솔에 출력하기

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
    // .then((result)=>console.log(result));
    .then((result)=>result)
       .then((data)=>{
        console.log(data.map((user)=>user.name))
    });


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
//     .then((result)=>result.map(({name}) => name)) // 구조분해할당을 사용하여 각 사용자 객체에서 name 속성만 추출
                                                    // const {name} = user;
                                                    // console.log(name)과 같다. 
//     .then((names)=> console.log(names)) // 추출한 이름들의 배열을 콘솔에 출력
//     .catch((error)=>console.error(error)) // 오류 출력
