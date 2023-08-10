






import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginservicService } from './loginservic.service';

@Injectable({
  providedIn:'root'
})


class  NormalGuardGuard{
  canActive(
    route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ):boolean{
    const router = inject(Router);
  const login = inject(LoginservicService); // Inject the Router using the `inject` function
  // Your logic to check if the user is an admin
  // Example:
  
  if (login.isLoggedIn()&&login.getUserROle()=='NORMAL') {
    return true;
  } else {
    // Redirect to a different route if the user is not an admin
    router.navigateByUrl('/login');
    return false;
  }
  }
}
export const normalGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):boolean=>
{
  return inject(NormalGuardGuard).canActive(route,state);
}
  


