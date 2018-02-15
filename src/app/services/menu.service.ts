import { Injectable } from '@angular/core';
import { Menu } from './../models/menu';
import { List } from './menu.data';

@Injectable() 
export class MenuService {

	/* without promise */
	// getMenu(): Menu[] {
	// 	return List;
	// }

	/* with promise */
	getMenu(): Promise<Menu[]> {
	  	return Promise.resolve(List);
	}

	/* simulate server latency */
	getMenuDelayed(ms = 1000): Promise<Menu[]> {
	    return new Promise(resolve => {
			setTimeout(() => resolve(this.getMenu()), ms);
		});
	}

}

