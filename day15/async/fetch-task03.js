// 1번 문제
// https://jsonplaceholder.typicode.com/comments
// email 10개만 가져온 후 email에서 아이디만 가져오기
// ex) ["Eliseo@gardner.biz"] => ["Eliseo"]
// 아이디만 출력

const getComments = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")
    const datas = await response.json()
    return datas;
};

getComments()
// .then((datas)=>console.log(datas)) // 잘 가져왔는지 확인
                                      // 배열 안에 객체들이 키값으로 들어가있는 형태

.then((datas)=>datas.map((data)=>data.email)) // 안에 들어온 데이터를 email로 바꾸기 
// 하나의 함수에서는 하나의 기능만 수행해야하므로 다음 then에서 5개만 잘라 가져오는 명령을 실행한다.
.then((emails)=>emails.slice(0 , 10)) // 이메일을 10개만 잘라서 가져오기.
// .then((emails)=>console.log(emails))

// .then((dmails)=>emails.map((email)=>email.split("@")))
// 데이터를 하나씩 접근해서 앞에 있는 아이디만 가져오기위해 @를 기준으로 자를건데,
// emails는 배열이고, 배열 안에서 반복문을 돌아서 들어오는 email은 string이다.
// string값을 자르는 split을 사용한다.
// .then((emails)=>console.log(emails)) // 배열안에 배열의 형태로 들어가서 출력됐다.

.then((emails)=>emails.map((email)=>email.split("@")[0]))
                                    // 자른 값 중 앞의 값(아이디)만 필요하므로 
                                    // 0번째 방만 가져온다.
.then((emails)=>emails.forEach((emails)=>{console.log(emails)}))
.catch((error)=>console.error(error))


                           

// 2번 문제
// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// ["Leanne Graham", ...] => ["maharG ennaeL", ...]

// 방법1
const getUsers = async () => {
    const response2 = await fetch("https://jsonplaceholder.typicode.com/users")
    const datas2 = response2.json();
    return datas2
};

getUsers()
// .then(console.log) // 참조형
                    // 받은것을 그대로 쓸 때는 모두 다 생략하고 함수의 소속을 알려주면 된다.
                    // .then(console.log) == .then((datas)=>{console.log(data)})

.then((datas)=>datas.map((data)=>data.name)) // 이름만 가져오기 위해 데이터를 받고 반복을 돌려서
                                            // map마다 들어오는 데이터를 데이터의 name으로 바꾸면 된다.
// .then(console.log) // 이름만 출력이 된 것을 확인할 수 있다.

.then((datas)=>datas.map((data)=>{ // 이름을 받아야하니까 반복을 돌린다.
                                   // 내부에서 반복문을 사용해서 반복을 한 번 더 돌린다.
    let result = ""; 
    for(let i = 0; i < data.length; i++){
        result += data.charAt(data.length -i, -1) // 문자열의 길이만큼 반복을 돌렸을 때 chatAt이 해당 인덱스값을 가져온다.
                                                // 마이너스 값으로 줬으니 뒤에서부터 가져오게 된다.
    }
    return result
}))

.then(console.log)
.catch(console.error)




// 방법2
// const getUsers = async () => {
//     const response2 = await fetch("https://jsonplaceholder.typicode.com/users")
//     const datas2 = response2.json();
//     return datas2
// };

// getUsers()
// .then((datas)=>datas.map((data)=>data.name)) 
// .then((datas)=>datas.map((data)=>{
//     return data.split("").reverse().join("") // split으로 자르면 문자가 하나하나씩 다 잘려서 리턴된다.
//                                             // 이 상태에서 reverse를 사용하면 그대로 반대가 된다.
//                                             // 반대가 된 문자를 join으로 붙인다.
// }))
// .then(console.log)
// .catch(console.error)





