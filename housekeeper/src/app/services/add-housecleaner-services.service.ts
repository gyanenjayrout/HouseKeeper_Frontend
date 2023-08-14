import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:7081';

@Injectable({
  providedIn: 'root'
})
export class AddHousecleanerServicesService {

  constructor( private http:HttpClient) { }

  public addHousekeeper(housekeeper:any)
  {

    return this.http.post(`${baseUrl}/housecleaner/ `,housekeeper);

  }

  public viewHoseKeepeer()
  {
    return this.http.get(`${baseUrl}/housecleaner/ `);
  }

  public viewHouseKeeperById(hid:any)
  {
    return this.http.get(`${baseUrl}/housecleaner/${hid} `);
  }

  public updateHousekeeper(housekeeper:any)
  {
    return this.http.put(`${baseUrl}/housecleaner/`,housekeeper);

  }

  public deleteHousekeeper(hid:any)
  {
    return this.http.delete(`${baseUrl}/housecleaner/${hid} `);
  }
}
