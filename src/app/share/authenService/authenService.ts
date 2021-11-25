import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Users } from '../type/user';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs'

export class authen{
  username!:string ;
  password!:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private baseUrl ='http://localhost:8900/api/';
  private httpHeader = new HttpHeaders().set('Content-Type','application/json');

  constructor(
    private http : HttpClient
  ) { }

  authenticate(data:authen): Observable<any> {
    let API_URL = `${this.baseUrl}/authen`;
    return this.http.post(API_URL,data)
    .pipe(
      catchError(this.handleError)
    )

    // if (username === "javainuse" && password === "password") {
    //   sessionStorage.setItem('username', username)
    //   return true;
    // } else {
    //   return false;
    // }

  }



  isUserLoggedIn() {

    let user = sessionStorage.getItem('username')
    return !(user === null)


  }

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('user_id')
    sessionStorage.clear();


  }

      //Error
      handleError(error: HttpErrorResponse){
        let errorMessage = '';
        if(error.error ){
            //Hadle client error
            errorMessage = error.error.message;
        }else{
            //Hadle Server error
          errorMessage = `Error Code: ${(error.status)}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);

      }
}
