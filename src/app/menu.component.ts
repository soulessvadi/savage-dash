import { Component, ViewChild, Renderer2 } from '@angular/core';
import { Menu } from './models/menu';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu.component.html',
})

export class MenuComponent {

	constructor(private menuService: MenuService) { 
		this.menuService.getMenu().then(menuList => this.tabs = menuList); 
	}

	@ViewChild('tabModal') TabModal;

  	tabs: Menu[];
	renderer: Renderer2;
	selectedTab: Menu;
	selectedSubtab: Menu;
	selectedSubtabEdit: Menu;
	selectedSubtabEditDefault: Menu;

	onTabSelect(tab: Menu): void {
  		this.selectedTab = tab;
	}

	onSubTabSelect(tab: Menu): void {
  		this.selectedSubtab = tab;
	}

	onSubtabEdit(tab: Menu): void {
		this.selectedSubtabEdit = tab;
	}

	onSubtabEditClose() {
		this.selectedSubtabEdit = this.selectedSubtabEditDefault;
	}	

}