import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './routes.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { MenuService } from './services/menu.service';
import { AuthService } from './services/auth.service';
import { ChatComponent } from './chat.component';
import { ChatMessageComponent } from './chat.message.component';
import { DashComponent } from './dash.component';
import { ProfileComponent } from './profile.component';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';

@NgModule({

  imports:		[ BrowserModule, FormsModule, AppRoutingModule, HttpModule ],

  declarations: [ AppComponent, MenuComponent, ChatComponent, DashComponent, ProfileComponent, ChatMessageComponent, UsersComponent, LoginComponent ],

  bootstrap: 	[ AppComponent ],

  providers: 	[ MenuService, AuthService ],

})

export class AppModule {

}

