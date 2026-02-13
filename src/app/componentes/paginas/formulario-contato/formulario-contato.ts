import { Component } from '@angular/core';
import { Conteiner } from '../../conteiner/conteiner';
import { Separador } from '../../separador/separador';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-formulario-contato',
  imports: [Conteiner,
            Separador,
            ReactiveFormsModule,
            CommonModule,
            RouterModule,
            RouterLink
  ],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato {
  contatoForm!: FormGroup;

  constructor(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]), //faz a verificação do email
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''), 



    });
  }

  salvarContato(){
    if(this.contatoForm.valid){
      console.log(this.contatoForm.value)

    }
  }

  cancelar(){
    console.log("submissao cancelada");
  }

}
