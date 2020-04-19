import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './layouts/home-layout/home/home.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  }, 
  {
    path: 'index',
    component: HomeLayoutComponent,
    pathMatch: 'full',
    children: [{
      path:'',
      component:HomeComponent
      //loadChildren: () => import('./layouts/home-layout/home-layout.module').then(m => m.HomelayoutModule)
    }]
  },
  {
    path: 'home',
    component: DashboardLayoutComponent,
    children: [
      {
      path:'',
      loadChildren: () => import('./layouts/dashboard-layout/dashboard-layout.module').then(m => m.DashboardLayoutModule)
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
