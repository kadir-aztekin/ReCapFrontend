import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root',
})
export class AccoundService {
  apiUrl = 'https://localhost:44398/api/auth';
  constructor(private httpClient: HttpClient) {}

  login(user: LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + '/login', user);
  }
  register(user: RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + '/register', user);
  }

  isAuthenticated() {
    return !!localStorage.getItem('token')
  }
}
