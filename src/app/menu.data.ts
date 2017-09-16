import {Menu} from './menu';

export const List: Menu[] = [
	{alias: '/', name: 'Dashboard', childs: []},
	{alias: '/chat', name: 'Chat', childs: []},
	{alias: '/profile', name: 'Profile', childs: []},
	{alias: '', name: 'Shop managing', 
		childs: [
			{alias: '', name: 'Products'},
			{alias: '', name: 'Pricelists'},
			{alias: '', name: 'Filters'},
		]
	},
	{alias: '', name: 'Pages managing', 
		childs: [
			{alias: '', name: 'Menu'},
			{alias: '', name: 'Pages'},
			{alias: '', name: 'Content'},
		]
	},
	{alias: '', name: 'Users', 
		childs: [
			{alias: '', name: 'All'},
			{alias: '', name: 'Groups'},
			{alias: '', name: 'Bans'},
		]
	},
	{alias: '', name: 'Settings', 
		childs: [
			{alias: '', name: 'General settings'},
			{alias: '', name: 'Shop settings'},
			{alias: '', name: 'Others'},
		]
	},
];