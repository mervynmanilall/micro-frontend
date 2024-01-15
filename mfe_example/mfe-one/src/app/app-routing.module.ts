import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstMfeAppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  component: MyFirstMfeAppComponent,
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
