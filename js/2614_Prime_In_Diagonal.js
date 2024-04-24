/**
 * @param {number[][]} nums
 * @return {number}
 */

function isPrime(number){
    if (number < 2){
        return false;
    }

    for (let j=2; j*j <= number; j++){
        if (number % j === 0){
            return false;
        }
    }
    return true;

}

var diagonalPrime = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    let maxPrime = 0;
    

    for (let row of nums){
        if (row[i] > maxPrime){
            if (isPrime(row[i])){
                maxPrime = row[i];
            }
        };
        i++;

        if (row[j] > maxPrime){
            if (isPrime(row[j])){
                maxPrime = row[j];
            }
        }
        j--;
    }

    return maxPrime;
};
