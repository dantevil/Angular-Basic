//import { AuthorService } from './author.service';
import { AuthorComponent } from './author.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
   // AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
