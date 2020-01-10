import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketingComponent } from './marketing/marketing.component';
import { WeblayoutComponent } from './weblayout/weblayout.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent,
        children: [
          { path: 'layout', component: WeblayoutComponent },
          { path: 'baseinfo', component: BasicInformationComponent },
          { path: 'marketing', component: MarketingComponent },
          { path: 'projects', component: ProjectsComponent },
        ]
      },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
