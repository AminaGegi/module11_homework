function getNumbers(a,b){
    let i=a;
    function func (){
        if (i<=b){
            console.log(i)
        }
        i++
    }
    const intervalId = setInterval(func, 1000);
    setTimeout (function(){
        clearInterval(intervalId)
    }, (b-a+1)*1000)
}

getNumbers (10, 30);
