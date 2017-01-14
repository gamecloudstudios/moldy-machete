import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';  // Added for the Windows version of Angular2

import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
const routes: Routes = [
  { // root path
    path: '',
    redirectTo: '/four-oh-four',
    pathMatch: 'full'
  },
  {
    path: 'four-oh-four',
    component: FourOhFourComponent
  },
  { // "404"" page
    path: '**',
    redirectTo: '/four-oh-four',
    pathMatch: 'full'
  }
];

export const appRoutes = RouterModule.forRoot(routes);


