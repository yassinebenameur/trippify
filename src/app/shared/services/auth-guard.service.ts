
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }


    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.userService.isLoggedIn()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;

    }

}
