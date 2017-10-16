import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WikiListComponent } from './components/wiki-list/wiki-list.component';
import { DataService } from "./services/data.service";
import { WikiComponent } from './components/wiki/wiki.component';
import { AddWikiComponent } from './components/add-wiki/add-wiki.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WikiListComponent,
    WikiComponent,
    AddWikiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
