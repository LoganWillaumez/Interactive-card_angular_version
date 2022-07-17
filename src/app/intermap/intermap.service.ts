import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { userRequest } from './user';

@Injectable({
  providedIn: 'root',
})
export class IntermapService {
  constructor(private http: HttpClient) {}
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    // tranform to an observable
    return of(errorValue);
  }

  getUsersList(): Observable<userRequest> {
    return this.http
      .get<userRequest>('https://randomuser.me/api/?results=3')
      .pipe(
        tap((response) => console.log('response : ', response.results)),
        catchError((error) => this.handleError(error, undefined))
      );
  }

  toggleBool(bool: boolean) {
    bool = !bool;
  }
}
