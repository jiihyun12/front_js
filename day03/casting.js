// 형변환 (Type Conversion)
let data1 = "10" - 20;
console.log(data1);

// 숫자가 될 수 있는 문자열에 +,-를 붙이면 숫자타입으로 강제 형변환된다.
let data2 = +"20";
let data3 = Number("20");
// console.log(typeof(data2));
console.log(typeof(data3));

// "안녕" -> true로
// Boolean의 강제 형변환
// !, !!를 붙이면 boolean 타입으로 강제 형변환 된다.
let data4 = "안녕";
let data5 = Boolean(data4);
// console.log(data5);
// console.log(typeof(data5));
console.log(!!data4);


// 정수 -> 문자열
// .toString() 메서드를 이용하여 변경한다.
let data6 = 10;
let data7 = 10;
let data8 = data6.toString() + data7.toString();
console.log(data8);













