import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any = {};
  localUserDataKey = 'allUserData';

  constructor(private http: HttpClient, private router: Router) {
    this.getUserData();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'access-Control-Allow-Origin': '*',
      'access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    }),
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  // baseurl: 'https://developer.hackerkernel.com/demo/shreesaidarshan/public/api/user-login';

  saveUserDataLocal(value: any) {
    if (value) {
      const str = JSON.stringify(value);
      console.log('str, JSON.stringify(value)--', str);
      localStorage.setItem(this.localUserDataKey, str);
      this.getUserData();
      console.log('this.getUserData();', this.getUserData());
    }
  }

  isUserLogin() {
    console.log('isUserLogin called. this.userData - ', this.userData);
    return Object.keys(this.userData).length ? true : false;
  }

  getUserData() {
    const data = localStorage.getItem(this.localUserDataKey);
    if (data) {
      const obj = JSON.parse(data);
      console.log('obj JSON.parse(data)-- ', obj);
      this.userData = obj;
      console.log('obj this.userData JSON.parse(data)-- ', this.userData);
      return obj;
    } else {
      return {};
    }
  }

  onSubmitloginApiData(data: any): Observable<any> {
    return this.http.post(
      `http://165.22.222.20/demo/shreesaidarshan/public/api/user-login`,
      data
    );
    // return this.http.post(
    //   `https://developer.hackerkernel.com/demo/shreesaidarshan/public/api/user-login`,
    //   data
    // );
    // return this.http.post(`https://reqres.in/api/login`,data);
  }

  logout() {
    localStorage.removeItem(this.localUserDataKey);
    this.userData = {};
    this.router.navigateByUrl('/login');
  }


}
