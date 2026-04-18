import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'loja/produtos',
    loadChildren: () => import('./loja/produto/produto.routes').then(m => m.produtoRoutes),
  },
];
