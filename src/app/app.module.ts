import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './routes.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { ChatComponent } from './chat.component';
import { ChatMessageComponent } from './chat.message.component';
import { DashComponent } from './dash.component';
import { ProfileComponent } from './profile.component';

@NgModule({

  imports:		[ BrowserModule, FormsModule, AppRoutingModule, HttpModule ],

  declarations: [ AppComponent, MenuComponent, ChatComponent, DashComponent, ProfileComponent, ChatMessageComponent ],

  bootstrap: 	[ AppComponent ],

  providers: 	[ MenuService ],

})

export class AppModule {

}

