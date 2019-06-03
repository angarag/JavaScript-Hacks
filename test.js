let arr = [1, 2, 3, 4, 5, 6, 7];
delete arr[3];
console.log(arr);
let obj = {};
arr.forEach(a => (obj[a] = a));
console.log(obj);
console.log(arr[3] == undefined);
console.log(Math.min(...arr.filter(i => i != NaN)));
