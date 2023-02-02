import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup
  redireccion: string = '';

  constructor(private formbuilder: FormBuilder, private authen: AuthenticationService, private router:Router) {

    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      });
    }

    get username(){ return this.loginForm.get('username'); }
    get password(){ return this.loginForm.get('password'); }



    onSubmit(){
      if (this.loginForm.valid) {
        alert('Ingreso exitoso');
        this.authen.login();
        this.redireccion = this.authen.urlUSuarioIntentandoAcceder;
        this.authen.urlUSuarioIntentandoAcceder = '';
        this.router.navigate(['/formulario']);
      } else {
        alert('Por favor complete todos los campos requeridos antes de enviar el formulario.');
      }
    }
}
