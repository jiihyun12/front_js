// async await
// https://jsonplaceholder.typicode.com/todos
// getTitles
// todos에서 title만 5개 가져오기 (0~4)
// 값으로 가져와서 가져온 데이를 "제목 : title" 내용으로 변경하여 출력하기


const getTitles = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if(!response.ok) return;
    const datas = await response.json();
    return datas
};

// getTitles().then((datas)=>console.log(datas)); // 배열의 형태이므로 반복문을 돌릴 수 있다.
getTitles()
.then((datas)=>datas.map((todo)=>todo.title)) // 비동기 코드를 동기의 변수에 담았기때문에
// tilte.then((titles)=>console.log(titles))  // then으로 받아서 출력해야한다.
 .then((titles)=>titles.slice(0, 5)) // 5개만 잘라서 출력한다.
 .then((titles)=>titles.map((title)=>`제목 : ${title}`)) // 포맷을 변경한다.
 .then((titles)=>titles.forEach((title)=>{console.log(title)})) // 제목을 출력한다.
 .catch((error)=>console.error(error)) // 오류를 처리한다.









