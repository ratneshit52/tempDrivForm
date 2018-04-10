import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { TestngComponent } from './testng.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TestngComponent ],
  bootstrap:    [ AppComponent, TestngComponent ],
})
export class AppModule { }
