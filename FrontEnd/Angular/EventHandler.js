//in component
@Output() name: EventEmitter<any>=new EventEmitter();
myFunc(){
	this.name.emit(args);
}
//in HTML, parent component
<div (name)="handlerMethod(event)"