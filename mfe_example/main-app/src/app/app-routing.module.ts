import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
//   {
//   path: '',
//   component: AppComponent,
//   pathMatch: 'full',
// },

// Your route here:

{
  path: 'mfes',
  loadChildren: () =>
    loadRemoteModule(
      {
      type: 'module',
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      exposedModule: './flights-module',
    }
    ).then((m) => m.AppModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
