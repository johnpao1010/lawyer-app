import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CaseFormComponent } from './case-form/case-form.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { LegalServicesComponent } from './legal-services/legal-services.component';
import { MessageComponent } from './message/message.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseFormComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    ContactComponent,
    LegalServicesComponent,
    MessageComponent,
    CookieBannerComponent,
    MissionVisionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }