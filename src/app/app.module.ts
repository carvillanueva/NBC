import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home/homePage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent }
      ], {})
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
