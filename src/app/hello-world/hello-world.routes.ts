import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world';

export const helloWorldRoutes: Routes = [
  { path: '', component: HelloWorld },
  { path: 'details', component: HelloWorld }
];
