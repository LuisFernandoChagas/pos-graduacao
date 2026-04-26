import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-searchable-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchable-select.html',
  styleUrl: './searchable-select.scss',
})
export class SearchableSelect {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = 'Buscar...';
  @Input() options: SelectOption[] = [];
  @Input() selectedValue: string = '';
  @Output() selectedChange = new EventEmitter<string>();

  busca: string = '';
  mostrarDropdown: boolean = false;

  get opcoesFiltradas(): SelectOption[] {
    if (!this.busca.trim()) {
      return this.options;
    }
    return this.options.filter(op =>
      op.label.toLowerCase().includes(this.busca.toLowerCase())
    );
  }

  onBusca(valor: string) {
    this.busca = valor;
    this.mostrarDropdown = true;
  }

  selecionarOpcao(opcao: SelectOption) {
    this.selectedValue = opcao.value;
    this.busca = opcao.label;
    this.mostrarDropdown = false;
    this.selectedChange.emit(opcao.value);
  }

  fecharDropdown() {
    setTimeout(() => {
      this.mostrarDropdown = false;
    }, 200);
  }

  ngOnChanges() {
    if (this.selectedValue) {
      const opcaoSelecionada = this.options.find(op => op.value === this.selectedValue);
      if (opcaoSelecionada) {
        this.busca = opcaoSelecionada.label;
      }
    }
  }
}
