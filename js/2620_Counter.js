// B"H
// https://leetcode.com/problems/counter/

/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function(n) {
    
    return function() {
        n = n + 1;
        return n - 1;
        };s
};

const counter = createCounter(10)
console.log(counter()) // 10
counter() // 11
counter() // 12