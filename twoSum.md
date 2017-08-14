一道比较简单的算法题：
实现一个函数，给定参数是一个整数的数组和一个target数值，返回给定数组里两个数加起来等于给定的target值得索引值组成的数组。
例子：
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
下面是我用js实现的算法

	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	var twoSum = function(nums, target) {
	    var length = nums.length,
	        map = [],result = [];
	    for ( var i = 0; i < length; i++){
	        var num = target - nums[i]
	        if (map.includes(num)){
	            result[0] = nums.indexOf(num);
	            result[1] = i
	        }
	        map[i] = nums[i]
	    }
	    return result;
	};
首先获取给定的数组的长度用于遍历，接下来我定义了两个数组map和result，其中result是最终返回的数组，而map是存贮已经遍历后的nums数组里面的值，用于判断target减去当前遍历值是否存在在map数组里，如果存在就取得它的索引值和当前索引值并赋给result数组。