import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegformComponent } from './components/regform.component';
import { ThankyouComponent } from './components/thankyou.component';


const routes: Routes = [
  { path: '', component: RegformComponent },
  { path: 'confirm/:idx', component: ThankyouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
