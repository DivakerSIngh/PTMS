import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
  
})
export class AppService {
  baseApiUrl='http://localhost:52200/api/';
  constructor(private http: HttpClient) { 
    this.baseApiUrl='http://localhost:52200/api/'
  }

  get(url, parameter:any={}): Observable<any> {
    return this.http.get(this.baseApiUrl + url, { params: parameter }).pipe(
        map((data) => {
            return data;
        })
    );
}


post(url,body): Observable<any> {
 
   let options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
};
    return this.http.post(this.baseApiUrl + url,JSON.stringify(body),options).pipe(
        map((data) => {
            return data;
        }
    ));

    // return this.http.post<any>(this.baseApiUrl + url, body)
    // .pipe(map(user => {
    //   debugger
    //   // login successful if there's a jwt token in the response
    //   if (user && user.token) {
    //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //     localStorage.setItem('currentUser', JSON.stringify(user));
    //    // this.currentUserSubject.next(user);
    //   }

    //   return user;
    // }));
}

login(username: string, password: string,grant_type:string) {
  debugger

  return this.http.post<any>(this.baseApiUrl + 'auth/login', { username, password,grant_type })
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
       // this.currentUserSubject.next(user);
      }

      return user;
    }));
}

// return this.httpClient.post<{access_token: string}>('http://www.your-server.com/auth/register', {email, password}).pipe(tap(res => {
//     this.login(email, password)
// }))
// .catch((err: HttpErrorResponse) => {
//   // simple logging, but you can do a lot more, see below
//   console.error('An error occurred:', err.error);
// });;
put(url,body){

}

delete(url,params){

}
  // Error handling
  catchError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
  
}
