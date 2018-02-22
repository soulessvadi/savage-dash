import { Component, ViewChild, Renderer2, OnInit } from '@angular/core';
import { Menu } from './models/menu';

export class Button { 
	trigger: string; 
	name: string; 
}

const Buttons: Button[] = [
	{trigger: 'back', name: 'Back'},
	{trigger: 'exit', name: 'Exit'},
];

@Component({
  selector: 'app-root',
  template: '``',
  templateUrl: './app.component.html',
  styles: [``],
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
	
	constructor(private renderer: Renderer2) {  }

  	@ViewChild('VideoWorker') VideoWorker;
  	@ViewChild('logo') Logo;

  	title = 'Page content goes here';
  	buttons = Buttons;

  	ngAfterViewInit(): void {
      this.loading('hide');
  	}

  	ngOnInit(): void {
  		this.loading('show');
  	}

  	loading(act: string): void {
  		if(act == 'show') this.renderer.addClass(this.Logo.nativeElement, 'loading');
  		if(act == 'hide') this.renderer.removeClass(this.Logo.nativeElement, 'loading');
  	}

}

