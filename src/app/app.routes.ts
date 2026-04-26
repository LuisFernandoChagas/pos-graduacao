import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'loja/produtos/lista', pathMatch: 'full' },
  {
    path: 'produto',
    loadChildren: () => import('./modules/produto/produto.routes').then(m => m.produtoRoutes),
  },
  {
    path: 'usuario',
    loadChildren: () => import('./modules/usuario/usuario.routes').then(m => m.usuarioRoutes),
  },
];
