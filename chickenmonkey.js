for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0) {
        console.log("Chicken") 
    }
    if (currentNumber % 7 === 0){
        console.log ("Monkey")
    }
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log ("ChickenMonkey")
    }
}
