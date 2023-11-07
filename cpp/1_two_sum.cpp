// B"H
// https://leetcode.com/problems/two-sum/
//

#include <iostream>
#include <vector>

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // structure to save output
        vector<int> output;
        int half = output.length();
        cout << "test" << " ";

        for (int i = 0; i < nums.size(); i++){
            cout << nums[i] << " ";

            output.insert(output.end(), i);

        }
        return output;
    }
};

int main(){
    
    return 0;
}
