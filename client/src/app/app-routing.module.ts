import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home/components/home-layout/home-layout.component';


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
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    }
  ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
