import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MarketingComponent } from './marketing/marketing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeblayoutComponent } from './weblayout/weblayout.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
// For MDB Angular Pro
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { ChooseTemplateComponent } from './choose-template/choose-template.component';
import { CreatWebsiteComponent } from './creat-website/creat-website.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AddprojectComponent } from './addproject/addproject.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MarketingComponent,
    NavbarComponent,
    DashboardComponent,
    WeblayoutComponent,
    BasicInformationComponent,
    ProjectsComponent,
    HomeComponent,
    ImagesComponent,
    VideosComponent,
    ScheduleComponent,
    SettingsComponent,
    ChooseTemplateComponent,
    CreatWebsiteComponent,
    AddprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,MatFormFieldModule,
    MatNativeDateModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule, WavesModule,
    PaginationModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVWrwHMG-YJeoy4GOxr3c0gEW7URuIyKw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
