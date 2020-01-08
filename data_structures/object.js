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

