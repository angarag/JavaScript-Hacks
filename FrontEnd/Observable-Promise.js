const promise = new Promise(function (resolve, reject) {
		if (condition) 
			reject();
		
		else
			resolve();
}
promise()
	.then((n) => { console.log('ok'); })
	.catch((i) => { console.log('nok'); })
console.log('I will run before Promise resolution');

//async await
async function A(){await funcB();}

//Obserable: import from rxjs
let pass=new Observable(observer=>observer.next())
pass.subscribe(data, err, done gsn 3 func bichih)
//Observable functions
map((i)=>{})
toPromise(): this.http.post(url,data).toPromise().then().catch()
catch(err=>{})
debounce(): only the value of observable at the interval is emitted
