// date객체를 이용한 포멧팅
function timeForToday(datetime){ // datetime을 입력받아 시간을 포맷팅하는 함수
    const today = new Date(); // 현재 날짜와 시간
    const date = new Date(datetime);  // 입력받은 datetime문자열을 기반으로 새로운 Date객체를 생성
  
    let gap = Math.floor( today.getTime() - date.getTime()) / 1000 / 60 
    // 현재 시간와 입려된 시간의 차이를 계산하여 분 단위로 변환
  
    if(gap < 1){ // 차이가 1분 미만일 경우
      return "방금 전"; //  1분 미만이면 "방금 전"을 반환
    }
  
    if(gap < 60){ // 차이가 60분 미만일 경우
      return `${gap}분 전`; // 60분 미만이면 몇 분 전인지 반환
    }
  
    gap = Math.floor(gap / 60);  // 차이를 시간 단위로 변환
  
    if(gap < 24){ // 차이가 24시간 미만일 경우
      return `${gap}시간 전`; // 24시간 미만이면 몇 시간 전인지 반환
    }
  
    gap = Math.floor(gap / 24); // 차이를 일 단위로 변환
    
    if(gap < 32) { // 차이가 32일 미만일 경우를 검사
      return `${gap}일 전`; // 32일 미만이면 몇 일 전인지 반환
    }
  
    gap = Math.floor(gap / 31); // 차이를 월 단위로 변환
  
    if(gap < 13){ // 차이가 13개월 미만일 경우를 검사
      return `${gap}개월 전`; // 13개월 미만이면 몇 개월 전인지 반환
    }
  
    gap = Math.floor(gap / 12); // 차이를 년 단위로 변환
    return `${gap}년 전`; // 1년 이상일 경우 몇 년 전인지 반환
  }
  
  console.log(timeForToday("2024-08-08 09:00:00"));
  // 주어진 날짜와 시간에 대해 timeForToday 함수 호출 후 출력
  


// 주어진 날짜 "2024-08-08 09:00:00"는 2024년 8월 8일 09시를 나타낸다.
// 현재 날짜는 2024년 9월 23일이다.

// 시간 차이: 2024년 9월 23일 09시와 2024년 8월 8일 09시의 차이는 약 46일
// 조건: 46일은 32일보다 크고 13개월보다 작으므로,
// 결과: 함수는 "46일 전"이라는 문자열을 반환
// 따라서 콘솔에 출력되는 결과는 "46일 전"



