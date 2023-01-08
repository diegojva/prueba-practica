import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: string;
  error: string;

  constructor(private router: Router,
              private loginService: LoginService,
              private snackBar: MatSnackBar,
              private window: Window) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'username': new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  operate(){
    this.loginService.login(this.form.value['username'], this.form.value['password']).subscribe(data => {
      sessionStorage.setItem(environment.TOKEN_NAME, data.access_token);
      this.snackBar.open('¡Bienvenido!', 'OK', { duration: 4000 });
      this.router.navigate(['/pages/organization']);
    }, _error => {
      if (_error.status === 401) {
        sessionStorage.removeItem(environment.TOKEN_NAME);
      }
      this.snackBar.open('Error en el servidor o datos incorrectores.', 'INFO', { duration: 2000 });
    });
  }

  get f_controls() {
    return this.form.controls;
  }

  openExternalLink(){
    this.window.open('https://www.sintad.pe/', '_blank');
  }
}
