// B"H
// https://leetcode.com/problems/split-with-minimum-sum/

/**
 * @param {number} num
 * @return {number}
 */

let num = 43256;

const splitNum = function(num) {
    numArray = Array.from(String(num), Number);
    numArray = numArray.sort();
    
    let num1 = "";
    let num2 = "";
    let sumTotal = 0;

    while (numArray.length){
        if (numArray.length === 1) {
            num1 = num1 + numArray.shift().toString();
        }

        else { 
            num1 = num1 + numArray.shift().toString();
            num2 = num2 + numArray.shift().toString();
            console.log(num1);
            console.log(num2);
        }
    }
    sumTotal = parseInt(num1) + parseInt(num2);
    return sumTotal;
};


