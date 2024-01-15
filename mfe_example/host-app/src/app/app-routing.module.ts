import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-first-mfe',
    loadChildren: () =>
      loadRemoteModule(
        {
        type: 'module',
        remoteEntry: 'http://localhost:7000/remoteEntry.js',
        exposedModule: './my-first-mfe',
      }
      ).then((m) => m.AppModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
