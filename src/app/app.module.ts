import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { DisplayingDataComponent } from './displaying-data/displaying-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayingDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
