import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from 'src/app/components/index/index.component';
import { ThreeBackComponent } from './components/three-back/three-back.component';
const routes: Routes = [
  { 
   path: '', component: IndexComponent,
 },
 {
  path: 'back', component: ThreeBackComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }