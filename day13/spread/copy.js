
const animals = {
    cat : "야옹이",
    dog : "누렁이",
    cow : "얼룩이",
    tiger : "어흥이"
}

const animals2 = animals;
animals2.camel = "낙둥이";

console.log(animals)
console.log(animals2)
// 모든 데이터를 새롭게 만들고 새로 넣었을 때
// 그 값 그대로 추가되기때문에
// 같은 주소를 참조하고있는 얕은복사이다.

const animals2 = {...animals, camel : "낙둥이"}; // spread 문법으로 해결했을 때
                                                // 서로 참조하고있는 주소가 달라진 깊은복사이다.


// 깊은 복사

// spread 문법
const animals3 = {...animals, bird : "둘기"}

// Object.assign(target, source);
const animals4 = Object.assign({}, animals); 
animals4.otter = "수달이"

consolelog(animal)
console.log(animals4)
