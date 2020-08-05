import { apiUrl } from './constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestServiceService {

  tokenName = 'token';

  constructor(private http: HttpClient) { }

  // Login
  httpLogin(url, params = {}) {
    return this.http.post(apiUrl + url, params, {});
  }

  // Register
  httpRegister(url, params = {}) {
    return this.http.post(apiUrl + url, params, {});
  }

  // get
  httpGet(url, params = {}) {
    let par = '?';
    Object.keys(params).forEach((key, index) => {
      par += key + '=' + params[key] + '&';
    });
    const headers = {
      token: JSON.parse(localStorage.getItem(this.tokenName))
    };
    return this.http.get(apiUrl + url + par, { headers });
  }
  // post
  httpPost(url, params) {
    const headers = {
      token: JSON.parse(localStorage.getItem(this.tokenName))
    };
    return this.http.post(apiUrl + url, params, { headers });
  }
  // put
  httpPut(url, params) {
    const headers = {
      token: JSON.parse(localStorage.getItem(this.tokenName))
    };
    return this.http.put(apiUrl + url, params, { headers });
  }
  // delete
  httpDelete(url) {
    const headers = {
      token: JSON.parse(localStorage.getItem(this.tokenName))
    };

    return this.http.delete(apiUrl + url, { headers });
  }
}
