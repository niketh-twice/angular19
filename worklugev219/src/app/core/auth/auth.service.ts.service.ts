import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';

  private apiUrl = 'https://ms6evynp6i.execute-api.ca-central-1.amazonaws.com/development/authenticate';
  constructor(private http: HttpClient) { }

  login(credentials: { email: any; password: any },) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

   loginToken(accessToken: string): void {
    localStorage.setItem(this.tokenKey, accessToken);
    const storedToken = localStorage.getItem(this.tokenKey);
    console.log('Stored token:', storedToken);
  }

  isAuthenticated(): boolean {
    console.log('Access Token:', localStorage.getItem(this.tokenKey));

    return !!localStorage.getItem(this.tokenKey);
    
  }
}
