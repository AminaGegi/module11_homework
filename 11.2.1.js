function arrChetNechet(arr){
    let nul = 0;// нулевые;
    let chet = 0; // четные
    let neChet = 0; // нечетные
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 0)
            nul++;
        else
        if ((arr[i] %= 2) == 0)
            chet++
        if ((arr[i] %= 2) == 1)
            neChet++
    }

    console.log(nul, chet, neChet);}
arrChetNechet([1,2,56,73,'kj',5,0,'456']);