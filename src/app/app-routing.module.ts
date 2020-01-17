import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketingComponent } from './marketing/marketing.component';
import { WeblayoutComponent } from './weblayout/weblayout.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';
import { CreatWebsiteComponent } from './creat-website/creat-website.component';
import { ChooseTemplateComponent } from './choose-template/choose-template.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent,
        children: [
          { path: '', component: CreatWebsiteComponent, pathMatch: 'full' },
          { path: 'layout', component: WeblayoutComponent },
          { path: 'baseinfo', component: BasicInformationComponent },
          { path: 'images', component: ImagesComponent },
          { path: 'marketing', component: MarketingComponent },
          { path: 'projects', component: ProjectsComponent },
          { path: 'videos', component: VideosComponent },
          { path: 'schedule', component: ScheduleComponent },
          { path: 'settings', component: SettingsComponent },
          { path: 'create-website', component: CreatWebsiteComponent },
          { path: 'choose-template', component: ChooseTemplateComponent },
        ]
      },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
