const animals = {
    cat : "야옹이",
    dog : "누렁이",
    cow : "얼룩이",
    tiger : "어흥이"
}

const {cat, dog, cow, tiger } = animals; // 키값을 반대로 분해한다.
console.log(cat);
console.log(dog);
console.log(cow);
console.log(tiger);

let [one, two, three, four] = [10, 20, 30, 40];  // 배열을 구조 분해하여 각각의 10, 20, 30, 40값을 
                                                // one,two,three,four변수에 할당한다.
console.log(one);
console.log(two);
console.log(three);
console.log(four);

let arr = [30,40,50,60];
// const [one, two, three, four] = arr;
console.log(one, two, three, four);