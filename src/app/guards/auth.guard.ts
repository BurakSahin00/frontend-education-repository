import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Store } from "@ngrx/store";
import { selectStatus } from "../management/selectors/auth.selector";
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private store: Store) { }

  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(selectStatus).pipe(
      take(1),
      map(status => {
        const isAuthenticated = status === 'authenticated';
        if (isAuthenticated) {
          return true;
        }
        // Login sayfanız '' path'inde, oraya yönlendiren UrlTree döndürün
        return this.router.createUrlTree(['']);
      })
    );
  }

}
