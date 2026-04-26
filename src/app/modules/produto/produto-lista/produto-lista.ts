import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './produto-lista.html',
  styleUrl: './produto-lista.scss',
})
export class ProdutoLista {
  produtos = [
    {
      id: 1,
      imagem: '/celular.webp',
      produto: {
        nome: 'Celular',
        codigo: 123456,
        cor: 'Branco',
      },
      preco: 1000,
      quantidade: 0
    },
    {
      id: 2,
      imagem: '/notebook.webp',
      produto: {
        nome: 'Notebook',
        codigo: 789456,
        cor: 'Preto',
      },
      preco: 2500,
      quantidade: 0
    },
    {
      id: 3,
      imagem: '/televisao.webp',
      produto: {
        nome: 'Televisão',
        codigo: 123456,
        cor: 'Cinza',
      },
      preco: 2000,
      quantidade: 0
    }
  ];

  subtotal: number = 0;

  calcularSubtotal() {
    this.subtotal = this.produtos.reduce((sum, produto) => sum + (produto.preco * produto.quantidade), 0);
  }

  retirar(item: any) {
    if (item.quantidade > 0) {
      item.quantidade--;
    }

    this.calcularSubtotal();
  }
  
  adicionar(item: any) {
    item.quantidade++;

    this.calcularSubtotal();
  }
}