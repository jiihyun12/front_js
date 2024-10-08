// for(초기식; 조건식; 증감식){}
// ex) for(let i = 0; i < 10;; i++){
// 	조건식이 참일 때 실행할 문장;	
// };

// 이름 10번 출력
// for(let i = 0; i < 10; i++){
//     console.log("함지현");
// };

// 1부터 10까지 출력
// for(let i = 0; i < 10; i++){
//     console.log(i+1);
// };

// break
// for(let i = 0; i < 10; i++){
//     console.log(i+1);
//     if(i === 5){
//         break;
//     }
// };

// continue
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i+1);
};


