# game1

## The animation will visualize how the code checks for duplicates. 

## Unique numbers will be highlighted in green, and duplicates will be highlighted in red with a shaking animation.

### Based on Java code-

#### class Solution {
####     public boolean containsDuplicate(int[] nums) {
####         if (nums == null || nums.length == 0) {
####             return false;
####         }
####         Set<Integer> seenNumbers = new HashSet<>();

####         for (int num:nums) {
####             if (seenNumbers.contains(num)) {
####                 return true;
####             }
####             seenNumbers.add(num);
####         }
####         return false;
####     }
#### }