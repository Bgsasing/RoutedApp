import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'

=======
import { FormsModule } from '@angular/forms';
>>>>>>> fa1d868b47de6ec6135c9a6f2605870be38bdab1
import { AppComponent } from './app.component';
import { DataEntryComponent } from './data.component';
import { AddEntryComponent } from './AddStud.Component';
import { PrintEntryComponent } from './ListStud.Component';
import { DisplayComponent } from './Display.Component';

@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    AddEntryComponent,
    PrintEntryComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
>>>>>>> fa1d868b47de6ec6135c9a6f2605870be38bdab1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }