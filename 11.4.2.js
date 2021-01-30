function prostoeChislo(a){
    let b = 0;
    if (a>1000){
        console.log("Данные не верны")
    }
    else
    if (a>1){
        for(i=2; i<a; i++) {
            if ((a %= i) === 0){
                b++
            }

            if (b === 0){
                console.log("Введенное число является простым")
            }
            else
                console.log("Введенное число не является простым")
        }
    }
    else
    if (a === 0){
        console.log('вы ввели 0')
    }
    else
    if (a === 1){
        console.log("Вы ввели 1")
    }
}

