import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-lista',
  imports: [CommonModule],
  templateUrl: './produto-lista.html',
  styleUrl: './produto-lista.scss',
})
export class ProdutoLista {
  produtos = [
    { id: 1, imagem: '/celular.webp', nome: 'Celular', preco: 0, quantidade: 1 },
    { id: 2, imagem: '/notebook.webp', nome: 'Notebook', preco: 0, quantidade: 1 },
    { id: 3, imagem: '/televisao.webp', nome: 'Televisão', preco: 0, quantidade: 1 },
  ];

  get subtotal() {
    return this.produtos.reduce((sum, produto) => sum + (produto.preco * produto.quantidade), 0);
  }
}
