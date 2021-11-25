import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Users } from '../type/user';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

export class User{
  id!:number;
  username!:string;
  fname!:string ;
  lname!:string;
  email!:string;
  tel!:string;
  password!:string;
  status!:boolean;
  role_id!:number;
}

export class updateUser{
  username!:string;
  fname!:string ;
  lname!:string;
  email!:string;
  tel!:string;
  role_id!:number;
}
export class changePass{
  password!:string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl ='http://localhost:8900/api/';
  private httpHeader = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');



  constructor(
    private http : HttpClient
  ) { }
    //addUser
    createUser(data:User): Observable<any>{
      let API_URL = `${this.baseUrl}/add-user`;
      return this.http.post(API_URL,data)
      .pipe(
        catchError(this.handleError)
      )
    }

    //updateUser
    updateUser(id:any,data:updateUser):Observable<any>{
      let API_URL = `${this.baseUrl}/update-user/${id}`
      return this.http.put(API_URL,data,{headers : this.httpHeader})
      .pipe(
        catchError(this.handleError)
      )
    }

    //checkPassword
    checkPassword(id:any,data:changePass):Observable<any>{
      let API_URL = `${this.baseUrl}checkpassword-user/${id}`;
      return this.http.post(API_URL,data)
      .pipe(map((res:any)=>{
        return res || {}
      }),
        catchError(this.handleError)
      )
    }

    //เปลี่ยนpassword
    changePassword(id:any,data:changePass):Observable<any>{
      let API_URL = `${this.baseUrl}/updatepass-user/${id}`
      return this.http.put(API_URL,data,{headers : this.httpHeader})
      .pipe(
        catchError(this.handleError)
      )
    }

    //deleteUser
    deleteUser(id:any):Observable<any>{
      let API_URL = `${this.baseUrl}/delete-user/${id}`
      return this.http.delete(API_URL,{headers : this.httpHeader})
      .pipe(
        catchError(this.handleError)
      )
    }

    //getUser
    getUser(id:any):Observable<any>{
      let API_URL = `${this.baseUrl}user/${id}`;
      return this.http.get(API_URL, {headers : this.httpHeader})
      .pipe(map((res:any)=>{
        return res || {}
      }),
        catchError(this.handleError)
      )
    }

    //getListUsers
    getListUsers(){
      return this.http.get(`${this.baseUrl}/user-list`)
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
