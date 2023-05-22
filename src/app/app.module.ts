import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './home/main.component';
import { RouterModule } from '@angular/router';
import { FooterSectionComponent } from './home/footer.component';
import { ServicesSectionComponent } from './home/services.component';
import { AboutSectionComponent } from './home/about.component';
import { HeaderSectionComponent } from './home/header.component';
import { ContactSectionComponent } from './home/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent }
      ], {})
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
