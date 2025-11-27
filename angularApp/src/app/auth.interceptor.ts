import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-auth-user',
    },
  });
  return next(cloned).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error intercepted:', error);
      return throwError(() => error);
    })
  );
};
