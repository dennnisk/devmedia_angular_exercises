import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-f-form-group',
  templateUrl: './f-form-group.component.html',
  styleUrls: ['./f-form-group.component.css']
})
export class FFormGroupComponent implements OnInit {

  formularioCadastro : FormGroup;

  constructor() {
    this.formularioCadastro = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'telefone': new FormControl(null, Validators.required),
      'endereco': new FormControl(null, Validators.required)});
  }
  
  
  ngOnInit() { }

  onSubmit() {
    let dados = `
    Nome: ${this.formularioCadastro.value.nome}
    Telefone: ${this.formularioCadastro.value.telefone}
    Endereço: ${this.formularioCadastro.value.endereco}`;

    console.log(dados);
  }

}
