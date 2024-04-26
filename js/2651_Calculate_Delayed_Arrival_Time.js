// B"H
// https://leetcode.com/problems/calculate-delayed-arrival-time/

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */

var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    let timeToArrive = arrivalTime + delayedTime;
    if (timeToArrive >= 24){
        return timeToArrive % 24;
    };
    return timeToArrive;
};

