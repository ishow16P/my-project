import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { catchError,map } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

export class Scores{
  score_1! : number;
  score_2! : number;
  score_3! : number;
  score_4! : number;
  score_5! : number;
  score_date! :number;
  doc_id! : number;
  user_id! :number;
}

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private baseUrl = 'http://localhost:8900/api/';
  private httpHeader = new HttpHeaders().set('Content-Type','application/json; charset=UTF-8');

  constructor(
    private http : HttpClient
  ) { }

  //addScore
  addScore(data:Scores):Observable<any>{
    let API_URL = `${this.baseUrl}/add-score`;
    return this.http.post(API_URL,data)
    .pipe(
      catchError(this.handleError)
    )
  }

  //getScorePage doc_id
  getScorePageDetail(docId:any):Observable<any>{
    let API_URL = `${this.baseUrl}/innerjoin/docJproJrule/${docId}`;
    return this.http.get(API_URL,{headers : this.httpHeader})
    .pipe(map((res)=>{
      return res || {}
    }),
      catchError(this.handleError)
    )
  }

  //getCheckScore เช็คว่าเคยให้คะแนนไปรึยัง
  getCheckScore(doc_id:any,user_id:any){
    let API_URL = `${this.baseUrl}/checkscore/${doc_id}/${user_id}`;
    return this.http.get(API_URL,{headers : this.httpHeader})
    .pipe(map((res) =>{
      return res || {}
    }),
      catchError(this.handleError)
    )
  }

  //getsScoreBoardDocList
  getScoreDocLIst(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/innerjoin/scoreboard/${id}`)
  }

  //getscoreBoardDetail
  getScoreBoardDetail(pro_id:any,doc_id:any){
    let API_URL = `${this.baseUrl}/innerjoin/scoreboardDetail/${pro_id}/${doc_id}`
    return this.http.get(API_URL,{headers : this.httpHeader})
    .pipe(map((res:any)=>{
      return res || {}
    }),
      catchError(this.handleError)
    )
  }

  //Error
  handleError(error: HttpErrorResponse){
    let errorMsg = '';
    if(error.error instanceof ErrorEvent){
      errorMsg = error.error.message
    }else{
      errorMsg = `Error Code : ${error.status}\n Message${error.message}`
    }
    console.log(errorMsg);
    return throwError(errorMsg)
  }
}
