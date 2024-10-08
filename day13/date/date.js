// Date 객체
// 날짜와 시간을 나타낸다.
// let 객체명 = new Date();

// Date객체의 주요 메소드
// getFullYear(): 4자리 년도
// getMonth(): 0~11사이의 정수(0: 1월, 1: 2월, ..., 11: 12월)
// getDate(): 한 달 내의 날짜(28~31)
// getDay(): 한 주 내 요일(0: 일요일, 1: 월요일, ..., 6: 토요일)
// getHours(): 0~23사이의 정수
// getMinutes(): 0~59사이의 정수
// getSeconds(): 0~59사이의 정수
// getMilliseconds(): 0~999사이의 정수
// getTime(): 1970년 1월 1일 0시 0분 0초 기준 현재까지의 밀리초
// setFullYear(year): 년도 저장
// setMonth(month): 월 저장
// setDate(date): 한 달 내의 날짜 값 지정
// setHours(hour): 시간 저장
// setMinutes(minute): 분 저장
// setSeconds(second): 초 저장
// setMilliseconds(ms): 밀리초 저장
// setTime(t): 밀리초 단위인 t값으로 시간 저장



let now = new Date(); // 현재 날짜와 시간
console.log(now); 
console.log(now.toLocaleString()); // 로컬 형식으로 문자열로 변환하여 출력한다.

now.setHours(9); // now의 시간을 9시로 설정
console.log(now.getHours());

let date2 = new Date(2020, 2, 22, 12, 35, 30); // 2020년 3월 22일 35분 30초 설정
console.log(date2.toLocaleString()); 

let date3 = new Date("2024-09-20"); // 2024년 9월 20일을 객체로 생성
console.log(date3);

let date4 = new Date("2024-09-20 10:30:00"); // 2024년 9월 20일 10시 30분 00을 나타내는 객체 생성
console.log(date4.toLocaleString()); // 로컬 형식으로 출력