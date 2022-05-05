import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormValues = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  constructor(
    private loginservice: AuthService,
    private routes: Router,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log('onSubmit function called');
    this.loginservice
      .onSubmitloginApiData(this.loginFormValues.value)
      .subscribe(
        (response: any) => {
          console.log('response token', response);

          this.loginservice.saveUserDataLocal(response.data);
          this.routes.navigate(['/tabs/tab1']);
        },
        (errors) => {
          this.presentToast();
        }
      );
  }


  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Please Enter Valid Information',
      duration: 3000,
      position: 'bottom',
      animated: true,
      cssClass: 'my-custom-class',
    });

    toast.present();
  }
}
