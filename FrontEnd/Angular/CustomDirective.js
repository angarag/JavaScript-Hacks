import {Directive, ElementRef, Renderer} from "angular/core";
//Custom directive
@Directive({
	selector:"[zoom]"
})
export class ZoomDirective{
	constructor(private el:ElementRef, private renderer:Renderer){

	}

	@HostListener('eventName') onEventName(){
		this.renderer.SetElementStyle(this.el.nativeElement,'height','10px');
	}
}
//Custom directive with a component
@Component({
	selector:"[container]",
	template:`
	<div class="title">
	{{title}}
	</div>
	<ng-content></ng-content>
	<div class="desc">
	{{description}}
	</div>
	`,
	style:''
})
export class ContainerComponent{
	@Input() title:string;
	@Input() description:string;
}

//in HTML
<span *ngFor="let image of images" container title={{image.title}} description={{image.desc}}>
<img zoom src={{image}}></img>
</span>
