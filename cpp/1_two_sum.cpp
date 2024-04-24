// B"H
// https://leetcode.com/problems/two-sum/
//

#include <iostream>
#include <vector>

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // structure to save output
        vector<int> output = nums;
        
        /*
        int half = output.size();
        cout << "test" << " ";
        for (int i = 0; i < nums.size(); i++){
            cout << nums[i] << " ";
            output.insert(output.end(), i);
        }
        */
        return output;
    }
};


int main()
{
    std::vector<int> test = { 3, 2, 4 };
    int target = 20;
    
    std::vector<int> output = Solution.twoSum(test, target)
    
    for (int i : output)
        std::cout << i << "\n";
    
    return 0;
}
