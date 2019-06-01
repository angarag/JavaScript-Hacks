//Initialize array
let arr = new Array(7);
arr = [];

//Create array from map
//arr = Array.from(myMap.keys());

//Add new element to the beginning
arr.unshift(Math.random(7));

//Add to the end
arr.push(7);

//Remove first element
arr.shift();

//Join arrays and return new array
arr = arr.concat([9, 9, 9]);

//Slice new array
const new_arr = arr.slice(0, 2).reverse();
//Splice array works in original array
array.splice(index, howmany, new_item1, ....., new_itemX) //if howmany=0, new items to be inserted

//Traverse
arr.forEach(element => {
  console.log(element); //result.push(false)
});
for (item of arr) console.log(item);
for (index in arr) console.log(arr[index]);

//Sort
arr.sort((k, v) => v - k);

//Add/Remove
//arr.splice(index, howManyToBeRemoved, itemsToBeAdded,...,itemX);

const email = "angarag@gmail.com";
arr = email.split("@");

//Sum
arr.reduce((sum, value) => sum + value, 0);
//Min/Max
const arrMax = arr => Math.max(...arr);
const arrMin = arr => Math.min(...arr);

//toString
let s1 = arr1
  .toString()
  .split(",")
  .join("");
