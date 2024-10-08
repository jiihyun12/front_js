// https://jsonplaceholder.typicode.com/users
// city를 가져와서
// 모두 대문자로 바꾸고,
// 알파벳 중 A의 개수를 세서 콘솔에 출력

// 문자열 안에서 대문자로 바꾸는 메서드
// toUpperCase();

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const datas = await response.json();
  return datas;
}

// 방법1
getUsers()
  .then((datas) => datas.map((data) => data.address.city.toUpperCase())) // data를 반복문 돌려서 
                                                                          // 반복문 돌린 data를 받아서 
                                                                          // data중에 city만 가져와서 대문자로 바꾼다.
  // .then(console.log) // 대문자로 바뀐채로 가져온것을 확인할 수 있다.

  // .then((datas) => datas.join("")) // join을 사용하여 문자열로 붙이면 옆으로 다 붙는다.
  // .then(console.log) 

  .then((datas) => datas.join("").split("")) // 여기에 split을 사용해서 자르면 다시 배열이 된다.
  // .then(console.log) 

  // .then((datas) => datas.filter((data) => data === 'A')) // 조건식이 true인것만 걸러내는 filter를 사용하여 
                                                        // data가 A와 같은것만 반환한다.
  // .then(console.log)    

  .then((datas) => datas.filter((data) => data === 'A').length) // filter의 길이만큼 출력한다.
  .then(console.log) 
  .catch(console.error)



// 방법2
getUsers()
  .then((datas) => datas.map((data) => data.address.city.toUpperCase()))
  .then((datas) => datas.filter((data) => data.includes("A"))) // datas에서 filter로 A를 포함하고있는것을 먼저 걸러낸다.
  .then((datas) => datas.map((data) => { // 빠른 for문 사용
    let result = "";
    for(let s of data){ // string값 중에서 (s)
      if(s === "A"){ result += s } // 만약에 s가 "A"라면 result에 누적합시켜라
    }
    return result // 반복이 모두 끝났을 때 result 반환
  }))
  .then((datas) => datas.join("").length) // 배열이니까 join을 사용한 후 길이를 구한다.
  .then(console.log)
  .catch(console.error)



