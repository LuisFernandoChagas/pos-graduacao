import { Routes } from '@angular/router';
import { EnderecoCadastro } from './endereco-cadastro/endereco-cadastro';

export const usuarioRoutes: Routes = [
  { redirectTo: 'endereco-cadastro', path: '', pathMatch: 'full' },
  { path: 'endereco-cadastro', component: EnderecoCadastro },
];