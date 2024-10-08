
// 10. 사용자가 입력했을 때 입력한 값이 없다면 원래 값으로 되돌리려한다.
// 그러기 위해 기존의 값을 복구하기 위한 임시의 저장공간 하나를 만든다.
// 전역변수로 임시 저장공간을 만든다.
globalThis.$temp;

function confirm(){ // 1. confirm 함수 생성
  let flag = false; // 11. flag 변수를 false로 초기화
  const $input = $("#input"); // 2. id가 input인 요소를 들고온다.
  const $tds = $("tbody tr td:first-child"); // 3. 현재 들어가있는 td의 데이터를 들고오기
                                            // tbody 내 모든 첫 번째 td 요소를 가져온다.
                                            // (구분 안에 들어갈 사용하가 입력한 데이터와 td안의 데이터를 비교하기위해 필요하다.)
  // console.log($input, $tds);                // 4. 잘 들고왔는지 확인

  if(globalThis.$temp){  // 12. 만약에 globalThis에 temp값이 있다면
    globalThis.$temp.closest("tr").css("background-color", "white") // 13. globalThis의 temp의 부모의 tr태그의 css를 바꿔라.
                                                                    // background-color를 white로 
    globalThis.$temp.text(globalThis.$temp.text().replaceAll("★", "")) // 14. globalThis의 temp의 innerText도 
                                                                        // 기존의 텍스트값으로 넣고, 별을 없앤다.
  }

  $tds.each((i, td) => { // 5. td 요소를 반복돌린다.
    const $td = $(td); // 6. 하나만 접근하면 자바스크립트로 바뀌고, 
                      // 그럴때마다 제이쿼리로 바꾸기 위해 매번 $를 쓰기 귀찮으니까 
                      // td를 변수에 담아둔다. ( 현재 td 요소를 jQuery 객체로 변환)
    if($td.text() === $input.val()){ // 7. td의 text랑 input의 value(입력된 데이터)랑 만약 같다면
      flag = true; // 15. flag 값을 true로 
      $td.text("★" + $td.text()); // 8. td에다가 text를 넣을게. 별을 붙인 기존의 텍스트를.
      globalThis.$temp = $td; // 16. 변경된 td를 globalThis의 temp에 저장한다.
      $td.closest("tr").css("background-color", "#0B3651") // 9. 부모에 선택되는 요소에 컬러 변경도 해줘야햐므로
                                                          // 부모 요소에 접근하는 closet 메서드를 사용한다.
                                                          // 부모 요소 중에서 tr태그가 있다면 css를 바꿔라 
                                                          // background-color를 #0B3651 이 색으로.
      $td.closest("tr").css("color", "white")             // 글자색도 화이트로 같이 바꿔라
    }
  })

  if(!flag){ // 17. 만약에 flag가 false라면
    alert("다시 입력해주세요!") // 잘못 입력했다는 알림창 뜨고
  }
  $input.val(""); // 기존의 value값(입력 필드의 값)도 없앤다.
};