import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaslistComponent } from '../pessoaslist/pessoaslist.component';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {
  pessoaForm: FormGroup;
  pessoas: any[] = [];

  constructor(private fb: FormBuilder) {
    this.pessoaForm = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required]
    });
  }

  cadastrarPessoa() {
    if (this.pessoaForm.valid) {
      const novaPessoa = this.pessoaForm.value;
      this.pessoas.push(novaPessoa);

      this.pessoaForm.reset();
      console.log('Pessoa cadastrada com sucesso:', novaPessoa);
    } else {
      console.log('Erro ao Cadastrar');
    }
  }
}
