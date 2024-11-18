// spread (ES6 문법)
// 1depth 깊은 복사
// 배열 객체

const animals = { // animals라는 객체 하나 생성
    cat : "야옹이",
    dog : "누렁이",
    cow : "얼룩이",
    tiger : "어흥이"
}

// 낙둥이를 추가하기 위해 animals를 가져온다음에 추가한다.
const animals2 = animals; // animals2을 복사해서 animals2에 넣었다.
animals2.camel = "낙둥이"; // animals2에 낙둥이를 추가했다.

console.log(animals) 
console.log(animals2)
 // 기존값에도 낙둥이가 추가되어 나온다.



// spread문법 사용
const animals2 = {...animals, camel : "낙둥이"}; // 중괄호 안에 
                                                // 기존의 animals를 
                                                // 앞에 ...을 찍어서 모든 객체를 하나씩 들고와준다.
                                                // 이후에 추가하는 로직이 있다면
                                                // 콤마를 찍고 작성해준다.
console.log(animals) // 기존 애들만 나온다.
console.log(animals2) // 추가된 낙둥이까지 같이 나온다.


// 배열에서 사용하기
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];

let numbers = arr1 + arr2 + arr3; // 배열끼리 연산 처리
console.log(numbers); // join된 채로 그대로 출력된다.
console.log(numbers.replaceAll("," , "")) // 콤마가 사라진채로 숫자만 출력된다.
console.log(numbers.replaceAll("," , "").split("")) // 배열의 형태로 출력은 됐지만 메서드를 두 번 써야하는 번거로움이 있다.
                                                    // 그리고 문자열값으로 출력이 된다.


let numbers2 = [...arr1, ...arr2, ...arr3]; // spread문법으로 한 번에 처리할 수 있다.
console.log(numbers2); // 배열의 형태로 정수값으로 출력이 된다.

console.log(...arr1) // 기존 배열들을 가져와서 일괄로 데이터를 뿌릴 수 있다.
                    // 이것은 배열만 사용이 가능하다.
                    // 객체는 순서가 없기 때문에 사용이 불가하다.
console.log(...animals) 


