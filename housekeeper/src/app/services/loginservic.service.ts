import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
const baseUrl = 'http://localhost:7081';

@Injectable({
  providedIn: 'root'
})
export class LoginservicService {

 

  public loginStatusSubject  =  new Subject<boolean>();
  constructor(private http:HttpClient,private router: Router) { }

public getCurrentUser()
{
  return this.http.get(`${baseUrl}/current_user`);
}
  public generateToken(loginData:any)
{
  const baseUrl = 'http://localhost:7081';
  const headers = { 'Content-Type': 'application/json' };
  return this.http.post(`${baseUrl}/generate-token`,loginData, { headers });

}

//login user:set token in localstorage


public loginUser(token: any)
{
   localStorage.setItem('token',token);
   return true;

}
//iszlogin: user is login or not
public isLoggedIn()
{
  let tokenStr =  localStorage.getItem('token');
  if(tokenStr == undefined || tokenStr == ''||tokenStr==null)
  {
    return false;
  }else{
    return true;
  }
}
//logout:remove token from local storage 

public logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.router.navigate(['/login']);
  return true;
  
}
//get token
public getToken()
{
  return localStorage.getItem('token');
}

//user details 
public setUser(user: any)
{
  localStorage.setItem('user',JSON.stringify(user));
}

//get user
public getUSer()
{
  let useStr = localStorage.getItem('user');
  if(useStr !=null)
  {
    return JSON.parse(useStr);
  }else{
    this.logout();
    return null;
  }
}

//get user role

public getUserROle()
{
  let userRole = this.getUSer();
  return userRole.authorities[0].authority;

}
}
