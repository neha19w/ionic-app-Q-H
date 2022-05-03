import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private loginservice: AuthService, private routes: Router) {}

  ngOnInit() {}

  loginFormData() {
    console.log('this.loginForm.value',this.loginForm.value);
  }

  loginSubmit() {
    console.log('loginSubmit function called');
    this.loginservice
      .loginData(this.loginForm.value)
      .subscribe((response: any) => {
        console.log('response');
        console.log(response);
        this.loginservice.saveUserDataLocal(response.data);
        this.routes.navigate(['/tabs/tab1']);
      });
  }
}
