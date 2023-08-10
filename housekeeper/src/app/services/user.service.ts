import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:7081';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }



  public adduser(user:any)
  {
    const baseUrl = 'http://localhost:7081';
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post(`${baseUrl}/user/`,user, { headers });

  }
}
