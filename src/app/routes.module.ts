import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ChatComponent } from './chat.component';
import { ChatMessageComponent } from './chat.message.component';
import { DashComponent } from './dash.component';
import { ProfileComponent } from './profile.component';
 
const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashComponent
	},			
	{
		path: 'chat',
		component: ChatComponent
	},
	{
	  	path: 'chat/:id',
	  	component: ChatMessageComponent
	},			
	{
		path: 'profile',
		component: ProfileComponent
	}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
	
}