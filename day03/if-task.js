// 이름: 여러분들의 성함
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

// 평균, 학점 구하기
// if문을 사용해서 평균이 60점이면 합격, 60점 이하는 불합격을 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.

const name = "함지현";
let kor = 80;
let math = 70;
let eng = 90;
let sci = 20;

let sum = kor + math + eng + sci;
let average = sum / 4;

if(average >= 60){
    console.log(`${name}님의 총점은 ${sum}, 평균은 ${average}점으로 합격입니다.`)
}else{
    console.log(`${name}님의 총점은 ${sum}, 평균은 ${average}점으로 불합격입니다.`)
};


// -----------------------
// 풀이
// const name = "김세환";
// let korScore = 80;
// let mathScore = 70;
// let engScore = 90;
// let scScore = 20;

// let totalScore = korScore + mathScore + engScore + scScore;
// let average = totalScore / 4;

// let pass = "합격";
// let notPass = "불합격";
// let cutOffScore = average >= 60;
// let passingResult = cutOffScore ? pass : notPass;
// let result = `${name}님의 이번 총점은 ${totalScore}, 평균은 ${average}으로 ${passingResult}입니다.`

// if(cutline){
//   console.log(result);
// }else{
//   console.log(result);
// }


