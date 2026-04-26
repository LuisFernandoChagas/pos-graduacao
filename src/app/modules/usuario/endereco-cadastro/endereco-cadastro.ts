import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchableSelect, SelectOption } from '../../../shared/searchable-select/searchable-select';
import { MessageService } from '../../../shared/message/message.service';
import { CepService } from '../../../services/cep.service';

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
        private messageService: MessageService,
        private cepService: CepService
    ) {
        this.form = this.fb.group({
            cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
            logradouro: ['', Validators.required],
            numero: [''],
            complemento: [''],
            bairro: ['', Validators.required],
            cidade: ['', Validators.required],
            uf: ['', [Validators.required, Validators.maxLength(2)]],
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
        console.log('Dados do endereço:', this.form.value);
        this.limpar();
    }

    limpar() {
        this.form.reset({ tipoEndereco: '' });
    }

    buscarCep(input: string) {
        const cep = input.replace(/\D/g, '');
        if (cep.length === 8) {
            this.cepService.recuperaCep(cep).subscribe({
                next: (data: any) => {
                    if (data.erro) {
                        this.messageService.showError('CEP não encontrado', 'O CEP informado não foi encontrado.');
                    } else {
                        this.form.patchValue({
                            logradouro: data.logradouro,
                            bairro: data.bairro,
                            cidade: data.localidade,
                            uf: data.uf,
                            complemento: data.complemento,
                        });
                    }
                }
            });
        } else {
            return;
        }
    }
}
