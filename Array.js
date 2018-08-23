const _ = require('lodash');

/*🙂 _.chunk
    arg: 
        array
        chunk_size
*/
_.chunk([1,2,3,4,5,6,7,8,9], 3)
//[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

/*🙂 _.compact 移除为假的值，包括(false, null, 0, undefined, NaN)
    arg:
        array
*/
_.compact([0, 1, false, 2, '', 3]);
//[1, 2, 3]

/*🙂 _.concat (不影响原数组)
    arg: 
        array
        [value](...*)
*/
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]
console.log(array);
// => [1]

/*🙂 _.difference (返回新数组)
    arg: 
        array 被考察项
        [value](...Array)... 排除项
*/
_.difference([2, 1], [2, 3]);
// => [1]


/*🙂 _.differenceBy (返回新数组)
    arg: 
        array 被考察项
        [value](...Array)... 排除项
        [iteratee=_.identity] (Function) 应用于每一个元素
*/
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]

// The `_.property` iteratee shorthand. 第三个参数为字符串可以代表_.prototype(x)的缩写用法
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]

/*🙂 _.differenceWith (返回新数组)
    arg: 
        array 被考察项
        [value](...Array)... 排除项
        [comparator] (Function): 应用于每一个元素, 比如引用数据类型无法直接比较，可以传入自定义的比较器
*/
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]

/*🙂 _.drop 
    arg: 
        array
        [n=1] (number): 开始下标，默认值为1
*/
_.drop([1, 2, 3, 4, 5], 2);
// [3, 4, 5]