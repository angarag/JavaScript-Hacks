{{expression | pipe | pipe:param1:param2}}

@Pipe({name:'censor'})
export class censorPipe{
	transform(input:string, replacement:string){
		var word=["bad"]
		return input.replace(word,replacement);
	}
}

//usage
{{phrase |  censor:"****"}}