var mymap = new Map();
mymap.set("key", 7);
mymap.get("key");

for (i of myMap.keys()) console.log(i);
console.log(myMap.size);

const keys = Array.from(mymap.keys());
const entries = Array.from(mymap.entries());

var map2 = new Map([
  ["firstname", "sumit"],
  ["lastname", "ghosh"],
  ["website", "geeksforgeeks"]
]);
let set = new Set();
map2.entries(); //return iterator object that contains key/value pair
//the following functions are same for set
map2.delete("website");
map2.values(); //returns iterator object
map2.clear();
//Set
set.add(key);
set.has(key);
set.keys() == set.values();
