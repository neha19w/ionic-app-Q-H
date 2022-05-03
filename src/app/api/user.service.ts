import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    console.log('api data call');
    // eslint-disable-next-line max-len
    // const url = 'https://www.quotesandhashtags.in/PlayStoreProjects/Api/getMyQuotes.php?query=select%20%20*%20from%20Love_Quotes&latestId=1046&lang=en';
    const url = 'https://www.quotesandhashtags.in/PlayStoreProjects/Api/getMyQuotesN.php?query=select%20%20*%20from%20Love_Quotes&lang=en';
      // const requestHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    // return this.http.get(url,{headers: requestHeaders});
    return this.http.get(url);
  }

  getHashTagDataApi(): Observable<any> {
    console.log('getHashApi Service Function Called');
    // eslint-disable-next-line max-len
    const urlh = 'https://www.quotesandhashtags.in/PlayStoreProjects/Api/getMyQuotesNe.php?query=select%20%20*%20from%20Love_Quotes&lang=en';
    return this.http.get(urlh);
  }
}
