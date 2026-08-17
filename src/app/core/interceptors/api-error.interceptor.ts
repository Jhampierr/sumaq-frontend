import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const apiErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocurrió un error inesperado en el servidor.';
      
      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente
        errorMessage = `Error del Cliente: ${error.error.message}`;
      } else {
        // Error del lado del servidor (NestJS / FastAPI)
        errorMessage = `Error del Servidor: Código ${error.status}, Mensaje: ${error.message}`;
      }
      
      console.error('API Error Interceptado:', errorMessage);
      return throwError(() => new Error(errorMessage));
    })
  );
};
