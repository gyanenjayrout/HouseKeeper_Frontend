import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:7081';
@Injectable({
  providedIn: 'root'
})
export class AlertServicesService {

  constructor(private http:HttpClient) { }

  public sentAlert(Alert:any)
  {
    
    return this.http.post(`${baseUrl}/alerts/`,Alert);

  }
  public getAllAlerts()
  {
    return this.http.get(`${baseUrl}/alerts/`);

  }

  public getAllertsOfHosekeeper(hid:any)
  {
    return this.http.get(`${baseUrl}/alerts/housekeeper/all/${hid}`)

  }
}
