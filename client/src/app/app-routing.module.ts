import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-module/home/home.component';
import { HomeLayoutComponent } from './home-module/home-layout.component';
import { AccountLayoutComponent } from './account-module/account-layout.component';


const routes: Routes = [
  {
    path:'',redirectTo:'elearn',pathMatch:'full'
  },
  {
    path: 'elearn',
    component: HomeLayoutComponent,
    children: [
      {
      path:'',
      loadChildren: () => import('./home-module/home.module').then(m => m.HomeModule)
    }
  ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
