//LIFO
class Stack{
	constructor(){
		this.items=[];
	}
	push(el){
		this.items.push(el);
	}
	pop(){
		return this.items.pop();
	}
	peek(){
		return this.items[this.items.length-1];
	}
	isEmpty(){
		return this.items.length===0;
	}
	size(){
		retur this.items.length;
	}
	clear(){
		this.items=[];
	}
}

//Use case - decimalToBinary
function baseConverter(decN,base){
	const remStack = new Stack();
	let number = decN;
	const digits='01234567890ABCDEFGHIJKLMOPQRSTUVWXYZ';
	let rem;
	let binaryString='';
	while(number>0){
		rem=Math.floor(number%base);
		remStack.push(rem);
		number=Math.floor(number/base);
	}
	while(!remStack.isEmpty()){
		binaryString+=digits[remStack.pop];
	}
	return binaryString;
}