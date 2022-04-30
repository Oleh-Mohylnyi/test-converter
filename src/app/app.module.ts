import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ConverterFormComponent } from './converter-form/converter-form-component';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ConverterFormComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
