// B"H
// https://leetcode.com/problems/minimum-common-value/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function searchArray(numsArray, numToSearch) {
    let middlePoint = Math.floor(numsArray.length / 2);

    if (numsArray.length == 0){
        return false;
    }

    if (numsArray.length == 1 && numsArray[0] == numToSearch) {
        return numToSearch;
    } else if (numsArray[middlePoint] > numToSearch) {
        return searchArray(numsArray.slice(0, middlePoint), numToSearch);
    } else if (numsArray[middlePoint] < numToSearch) {
        return searchArray(numsArray.slice(middlePoint+1), numToSearch);
    } else {
        return numToSearch;
    }
}

var getCommon = function (nums1, nums2) {
    let defaultMinCommon = -1;
    for (let num of nums1) {
        if (num >= nums2[0]) {
            let candidateMinCommon = searchArray(nums2, num)
            if (candidateMinCommon != false) {
                return candidateMinCommon;
            }
        }
    }
    return defaultMinCommon;
};



