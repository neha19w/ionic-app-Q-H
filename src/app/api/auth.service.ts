import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  userData: any = {};
  localUserDataKey = 'userData';

  constructor(private http: HttpClient, private router: Router) {
    this.getUserData();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'access-Control-Allow-Origin': '*',
      'access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
    })
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  // baseurl: 'https://developer.hackerkernel.com/demo/shreesaidarshan/public/api/user-login';

  saveUserDataLocal(value: any) {
    if (value) {
      const str = JSON.stringify(value);
      localStorage.setItem(this.localUserDataKey, str);
      this.getUserData();
      console.log('this.getUserData();', this.getUserData());
    }
  }

  isUserLogin() {
    console.log('isUserLogin called.');

    return Object.keys(this.userData).length ? true : false;
  }

  getUserData() {
    const data = localStorage.getItem(this.localUserDataKey);
    if (data) {
      const obj = JSON.parse(data);
      this.userData = obj;
      return obj;
    } else {
      return {};
    }
  }

  loginData(data: any): Observable<any> {
    // return this.http.post(`https://developer.hackerkernel.com/demo/shreesaidarshan/public/api`, data);
    // return this.http.post(`https://raphael-dashboard.hackerkernel.com/auth/login`, data);
    return this.http.post(`https://reqres.in/api/login`,data);
  }

  logout() {
    this.userData = {};
    localStorage.clear();

    setTimeout(() =>{
      this.router.navigateByUrl('/login');
    },500);


  }
}
