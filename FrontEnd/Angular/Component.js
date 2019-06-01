import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-root",
  template: "",
  style: ""
})
export class MarsComponent implements OnInit {
  @Input() mars_input1: number;
  @Input() str: string;
  text: string;
  constructor() {
    this.mars_input1 = 777;
    console.log("Constructor: Mars", this.mars_input1);
  }

  ngOnInit() {
    this.text = "";
    console.log("onInit: Mars", this.mars_input1, this.str);
  }
}
