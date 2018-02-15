import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ChatComponent } from './chat.component';
import { ChatMessageComponent } from './chat.message.component';
import { DashComponent } from './dash.component';
import { ProfileComponent } from './profile.component';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
 
const routes: Routes = [
	{
		path: 'auth',
		component: LoginComponent
	},	
	{
		path: '',
		component: DashComponent
	},
	{
		path: 'users',
		component: UsersComponent
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