import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  loginForm:FormGroup;
  

  constructor(private formbuilder: FormBuilder,private authen: AuthenticationService, private router:Router){
    this.loginForm = this.formbuilder.group({
    });
    }
}
