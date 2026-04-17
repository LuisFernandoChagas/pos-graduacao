import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./hello-world/hello-world.routes').then(m => m.helloWorldRoutes)
  }
];
