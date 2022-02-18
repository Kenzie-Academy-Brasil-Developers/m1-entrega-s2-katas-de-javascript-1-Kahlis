//Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
function oneThroughTwenty(){
    let result = [];
    for(let i = 1; i <= 20; i++){
        result.push(i);
    }
    return result;
}

//Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
function evensToTwenty(){
    let result = [];
    for(let i = 1; i <= 20; i++){
        if(i % 2 === 0){
            result.push(i);
        }
    }
    return result;
}

//Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
function oddsToTwenty(){
    let result = [];
    for(let i = 1; i <= 20; i++){
        if(i % 2 !== 0){
            result.push(i);
        }
    }
    return result;
}

//Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function multiplesOfFive(){
    let result = [];
    for(let i = 1; i <= 20; i++){
        if(i % 5 === 0){
            result.push(i);
        }
    }
    return result;
}

//Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
function squareNumbers(){
    let result = [];
    for(let i = 1; i <= 10; i++){
        let square = i ** 2;
        if(square <= 100){
            result.push(square);
        }
    }
    return result;
}

//Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
function countingBackwards(){
    let result = [];
    for(let i = 20; i > 0; i--){
        result.push(i);
    }
    return result;
}

//Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
function evenNumbersBackwards(){
    let result = [];
    for(let i = 20; i > 0; i--){
        if(i % 2 === 0){
            result.push(i);
        }
    }
    return result;
}

//Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function oddNumbersBackwards(){
    let result = [];
    for(let i = 20; i > 0; i--){
        if(i % 2 !== 0){
            result.push(i);
        }
    }
    return result;
}

//Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
function multiplesOfFiveBackwards(){
    let result = [];
    for(let i = 20; i > 0; i--){
        if(i % 5 === 0){
            result.push(i);
        }
    }
    return result;
}

//Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
function squareNumbersBackwards(){
    let result = [];
    for(let i = 10; i > 0; i--){
        let square = i ** 2;
        if(square <= 100){
            result.push(square);
        }
    }
    return result;
}
