var obj = Object.create();
var obj1={}
function Book(){
	this.id="1";
}
let book = new Book();
Book.prototype.getId=()=>this.id;

//ES6+
class Person{
	constructor(name){
		this._name=name;
	}
	get name(){
		return this._name;
	}
	set name(value){
		this._name=value;
	}
}
//Enhaced object properties
let [x,y]={'a','b'}  === var x ='a'; var y='b';obj2={x:x,y:y}



let d={};
d.test=1;
let c=Object.create(d);
d.test=2;
c.test==d.test;
//Object keys will iterate over only own properties while for(let in) loop will do deep iteration.
Object.keys(c) == for(let key in c);

let obj={hoho:1};
Object.freeze(obj);
obj.hihi=2;
obj.hoho=2;
console.log(obj);//{hoho:1}
let obj1={aa:1};
Object.seal(obj1);
obj1.aa=3;
console.log(obj1);//{aa:3}

Object.freeze vs const
https://alligator.io/js/const-vs-obj-freeze/

Object comparison:
https://gist.github.com/angarag/eb9e4cbc182045242787a14555ed35ee
https://github.com/hughsk/shallow-equals
https://www.npmjs.com/package/deep-equal
