const file = require("fs"); // fs모듈을 불러온다. 파일의 읽기, 쓰기 기능을 제공한다.

const user = new Object(); // user객체를 생성한다.
user.name = "함지현";
user.email = "jhj1234";
user.password = "1234";

const userJSON = JSON.stringify(user); // user객체를 JSON문자열로 변환한다.

console.log(user); // 객체로 출력된다.
console.log(userJSON); // 문자열로 출력된다.




// file.write("경로", "내용", "인코딩방식", "콜백함수");
file.writeFile("user.json", userJSON, "utf-8", (err, content)=>{ 
    // user.json파일을 생성하고, JSON문자열을 쓰고, uft-8인코딩을 사용하며, 작업이 끝나면 콜백 함수가 호출된다.

    // 오류처리
    // 파일 작성중 오류가 발생하면 err에 오류 정보가 담기고,
    // 성공적으로 파일이 쓰여지면 성공 메시지가 출력된다.
    if(err){
        console.log(err)
    }else{
        console.log("출력 성공")
    }
})

// file.readFile("경로", "인코딩", "콜백함수");
let user2
file.readFile("user.json", "utf-8", (error, content)=>{ 
// readFile메서드를 사용해 user.json파일을 읽는다.
// 파일 내용은 utf-8인코딩으로 처리되고, 파일 읽기 작업이 완료되면 콜백함수가 호출된다.

    user2 = JSON.parse(content); // content를 JSON객체로 변환하여 user2에 저장한다.
});

user2 = JSON.parse(file.readFileSync("user.json", "utf-8")); // readFile 메서드를 사용하여 
                                                              // user.json파일을 동기적으로 읽는다.
                                                              // 파일을 읽고 결과를 즉시 사용해야할 때 유용하게 쓰인다.
                                                              // 읽은 내용을 JSON객체로 변환하여 user2에 저장한다.
console.log(user2); // user2객체를 콘솔에 출력하면
                    // user와 같은 사용자 정보를 포함하고 있는것을 확인할 수 있다.