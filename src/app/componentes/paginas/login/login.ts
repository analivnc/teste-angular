import { Component } from '@angular/core';
import { Conteiner } from '../../conteiner/conteiner';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [Conteiner, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})


export class Login {

  emailForm!: FormGroup;

  constructor() {
    this.emailForm = new FormGroup({
     email: new FormControl('', [Validators.required, Validators.email]),
     senha: new FormControl('', [Validators.required])
    });
  }

  salvarEmail() {
  console.log(this.emailForm.value);
}

}
