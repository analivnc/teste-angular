import { Component } from '@angular/core';
import { Conteiner } from '../../conteiner/conteiner';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    Conteiner,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  emailForm!: FormGroup;

  constructor(private router: Router) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
      lembrar: new FormControl(false)
    });
  }



  salvarEmail() {
    console.log(this.emailForm.value);


    this.router.navigate(['/perfil-contato']);


  }
}
