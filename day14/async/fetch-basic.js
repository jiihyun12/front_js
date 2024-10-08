// https://jsonplaceholder.typicode.com/posts

// get 요청
// fetch(backendUrl)
// fetch(backendUrl, option)

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=>response.json())
//     .then((result)=>console.log(result))



// https://jsonplaceholder.typicode.com/albums

// console.log(fetch("https://jsonplaceholder.typicode.com/albums")); // promise타입의 pending(대기)상태로 출력된다.
                                                                      
fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response)=>{ 
        if(!response.ok){ // 서버와의 통신에 실패했을 때 
            throw new Error(`response Error : ${response.status}`) // 오류를 발생시키고 처리한다.
        }
        // .json() : response객체를 -> object개체로 바꿔서 데이터를 리턴해주는 메서드
        return response.json(); // 응답이 성공적이면 reponse.json()을 호출하여 JSON데이터를 js객체로 변환하고 반환한다.
    })
    .then((result)=>{ // 위에서 받은 결과값이 배열의 형태이므로 반복문을 돌릴 수 있다.
        result.map((album)=>album.title) // map함수로 반복문을 돌려서 album의 title만 가져온다.
    })
    .then((titles)=>{
        console.log(titles) // 위에서 가져온 title을 출력한다.
    })
    .catch((error)=>{
        console.error(error) // 오류가 발생할경우 오류 메시지를 출력한다.
    });