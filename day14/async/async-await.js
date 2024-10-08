// async await (ES8)

const getUsers = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // response라는 변수는 동기의 로직이고
                                                                            // fetch 코드는 비동기이기때문에 변수에 담기지 않는다.
                                                                // 따라서 함수의 매개변수 앞에 async를 사용하여 비동기임을 알리고, 
                                                                 // fetch 앞에 await를 사용하여 기다리지 말고 
                                                                 // 바로 동기의 로직으로 합류시키라고 명령한다.
    const datas = await response.json() 
    return datas;
}

getUsers().then((result)=>{
    console.log(result)
})