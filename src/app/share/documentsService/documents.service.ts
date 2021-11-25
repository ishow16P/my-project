import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

export class Document{
  doc_name! :string;
  doc_address! :string;
  members! :string;
  doc_date! :Date;
  status! :boolean;
  user_id! :number;
  pro_id! :number;
}

export class updateDocument{
  doc_name! :string;
  doc_address! :string;
  members! :string;
  doc_date! :Date;
  status! :boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private baseUrl = 'http://localhost:8900/api/';
  private httpHeader = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');


  constructor( private http :HttpClient) { }

  //addDocument
  addDocment(data:Document): Observable<any>{
    let API_URL = `${this.baseUrl}/add-documents`;
    return this.http.post(API_URL,data)
    .pipe(
      catchError(this.handleError)
    )

  }

  //updateDocuments
  updateDocument(id:any,data:updateDocument):Observable<any>{
    let API_URL = `${this.baseUrl}/update-documents/${id}`;
    return this.http.put(API_URL,data,{headers : this.httpHeader})
    .pipe(
      catchError(this.handleError)
    )
  }

  //DeleteDocument
  deleteDocument(userId:any,proId:any): Observable<any>{
    let API_URL = `${this.baseUrl}/delete-documents/${userId}/${proId}`;
    return this.http.delete(API_URL, {headers : this.httpHeader})
    .pipe(
      catchError(this.handleError)
    )

  }


  //getDocumentById
  getDocumentById(docId:any):Observable<any>{
    let API_URL = `${this.baseUrl}/documents/${docId}`;
    return this.http.get(API_URL, {headers : this.httpHeader})
    .pipe(map((res:any) =>{
      return res || {}
    }),
      catchError(this.handleError)
    )
  }
  //getDocumentinProject
  getDocumentsInPro(proId:any):Observable<any>{
    let API_URL = `${this.baseUrl}/documentsinPro/${proId}`;
    return this.http.get(API_URL, {headers : this.httpHeader})
    .pipe(map((res:any) =>{
      return res || {}
    }),
      catchError(this.handleError)
    )
  }

  //getDocmentByUserAndPro ID
  getDocument(userId:any,proId:any):Observable<any>{
    let API_URL = `${this.baseUrl}/documentbyUserAndPro/${userId}/${proId}`;
    return this.http.get(API_URL, {headers : this.httpHeader})
    .pipe(map((res)=>{
      return res || {}
    },
      catchError(this.handleError)
    ))
  }

  handleError(error: HttpErrorResponse){
    let errorMsg ='';
    if(error.error instanceof ErrorEvent){
      //handleError
      errorMsg = error.error.message;
    }else{
      //ServerError
      errorMsg = `Error Code : ${error.status}\n Message${error.message}`
    }
    console.log(errorMsg)
    return throwError(errorMsg);
  }

}
