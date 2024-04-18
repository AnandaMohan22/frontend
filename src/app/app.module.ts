import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { HomeComponent } from './home/home.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatChipsModule } from '@angular/material/chips';
// import {MatInputModule} from '@angular/material/input';
// import { MatIconModule } from '@angular/material/icon';


import { FormsModule } from '@angular/forms';

//import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //HomeModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    // MatInputModule,
    // MatIconModule,
   FormsModule,
   ReactiveFormsModule,
    // MatChipsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
