//ТОЛЬКО ТАК СМОГЛА РЕАЛИЗОВАТЬ ЭТО ЗАДАНИЕ
function sum(a) {

    return function (b = prompt('введите число')) {
        b++;
        b--;

        let result = a+b;
        return result;
    };
};

const res = sum(21);
console.log(res());