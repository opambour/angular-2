import { Component, OnInit } from '@angular/core';

//create a component
@Component({
  selector: 'my-app',
  template: `<h1>Welcome to Angular 2</h1>
	        {{title}}
`
})

//export component
export class AppComponent implements OnInit {
	constructor(){}

	title: string;	

	ngOnInit(){
		this.title = "You now have a working Angular-2 App. Edit to make it your own. Let's start developing";
	}
}
