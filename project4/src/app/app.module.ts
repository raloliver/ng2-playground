import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WikiListComponent } from './components/wiki-list/wiki-list.component';
import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WikiListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
