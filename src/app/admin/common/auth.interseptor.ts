import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "../../client/common/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterseptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(this.auth.isAuth()) {
      req = req.clone({
        setParams: {
          auth: this.auth.token ?? ''
        }
      })
    }

    return next.handle(req).pipe(catchError(err => {
      if(err.status === 401) {
        this.auth.logout()
        this.router.navigate(['/admin', 'login'])
      }
      return throwError(err)
    }))
  }

}
