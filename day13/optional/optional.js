// 옵셔널 체이닝(optional chaining)

const movie = {
    name : "오펜하이머",
    detail : {
        price : "50000",
        date : "20240920"
    }
}

const movie2 = {
    name : "마블",
    detail : {
        price : "100000"
    }
}

function printMoviePrice(movie){ // movie객체를 입력받아 가격을 출력하는 함수
    console.log(movie.detail.price) 
}

printMoviePrice(movie) 
printMoviePrice(movie2)

function printMovieDate(movie){ // 날짜를 반환하는 함수
    return movie?.detail?.date; // 옵셔널 체이닝을 이용하여 movie객체에 detail이 존재할 경우 그 안의 date값을 반환한다.
                                // detail이 없다면 undefined가 반환된다.
}

