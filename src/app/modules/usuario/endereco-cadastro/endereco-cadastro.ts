import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchableSelect, SelectOption } from '../../../shared/searchable-select/searchable-select';
import { MessageService } from '../../../shared/message/message.service';

@Component({
  selector: 'app-endereco-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchableSelect],
  templateUrl: './endereco-cadastro.html',
  styleUrl: './endereco-cadastro.scss',
})
export class EnderecoCadastro {
    form;
    tiposEndereco: SelectOption[] = [
      { value: 'residencial', label: 'Residencial' },
      { value: 'comercial', label: 'Comercial' },
    ];

    constructor(
        private fb: FormBuilder,
        private messageService: MessageService
    ) {
        this.form = this.fb.group({
            cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
            logradouro: ['', Validators.required],
            numero: ['', Validators.required],
            complemento: [''],
            bairro: ['', Validators.required],
            cidade: ['', Validators.required],
            estado: ['', [Validators.required, Validators.maxLength(2)]],
            referencia: [''],
            tipoEndereco: ['', Validators.required],
            observacoes: [''],
        });
    }

    get f() {
        return this.form.controls;
    }

    get tipoEnderecValue(): string {
        return this.form.get('tipoEndereco')?.value || '';
    }

    onTipoEnderecChange(valor: string) {
      const control = this.form.get('tipoEndereco');
      if (control) {
        control.setValue(valor);
      }
    }

    salvar() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.messageService.showWarning('Formulário inválido', 'Preencha todos os campos obrigatórios corretamente.');
            return;
        }

        this.messageService.showSuccess('Endereço salvo com sucesso!', 'Os dados de entrega foram gravados.');
        this.limpar();
    }

    limpar() {
        this.form.reset({ tipoEndereco: '' });
    }
}
