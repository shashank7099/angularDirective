import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { } from '@angular/cdk/keycodes';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UppercaseDirective } from './uppercase.directive'

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, UppercaseDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
