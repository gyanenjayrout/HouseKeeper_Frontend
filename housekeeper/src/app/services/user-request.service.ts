import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:7081';
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  constructor(private http:HttpClient) { }


  public sendRequest(req:any)
  {
    return this.http.post(`${baseUrl}/cleanRequest/saveCleanRequest`,req);

  }
}
