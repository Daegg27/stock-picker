const FindLowest = function(prices, highestDay, lowestDay){
    for (let i = 0; i < prices.indexOf(highestDay) - 1; i++){
        if (prices[i] < lowestDay){
            lowestDay = prices[i]
        }
    }
    return lowestDay
}
exports.picker = function(prices) {

    let highestDay = prices[1];
    let lowestDay = prices[0];
    let finalResult = [];
    // This is the loop to grab the highest day, skips the first element
    for (let i = 1; i < prices.length; i++){
        if (prices[i] > highestDay){
            highestDay = prices[i];
        }
    }
    // This is the loop to grab the lowest day, only iterates through days before the highest day
   lowestDay = FindLowest(prices, highestDay, lowestDay);

    //Ensures lowest day can not be higher than the highest
    if (lowestDay > highestDay){
        let newHighestDay = 0;
        for (let i = prices.indexOf(highestDay) + 1; i < prices.length; i++){
            if (prices[i] > newHighestDay){
                newHighestDay = prices[i]
                highestDay = newHighestDay
            }
        }
        // Check for lowest day again
       lowestDay = FindLowest(prices, highestDay, lowestDay);
    }
    
    

    finalResult.push(prices.indexOf(lowestDay));
    finalResult.push(prices.indexOf(highestDay));
    // console.log(highestDay, lowestDay)
    // console.log(finalResult)
    return finalResult
}
// exports.picker([17,3,6,9,15,8,6,1,10])
// exports.picker([19,17,6,9,8,15,6,3,1])