import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CharacterService} from './Character.service';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
