import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Projects } from '../type/projects';
import { Document } from '../type/document';
import { requestUser } from '../type/projects';
import { Users } from '../type/user';
import { Observable, pipe, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators';


export class Project {
  pro_name!:string;
  start_date!:Date;
  end_date!:Date;
  submit_start!:Date;
  submit_end!:Date;
  score_start!:Date;
  score_end!:Date;
  status!:boolean;
  pro_type_id!:number;
  rule_id!:number;
}

export class updateProject {
  pro_name!:string;
  start_date!:Date;
  end_date!:Date;
  submit_start!:Date;
  submit_end!:Date;
  score_start!:Date;
  score_end!:Date;
  status!:boolean;
  pro_type_id!:number;
  rule_id!:number;
  rule_1!:string;
  rule_2!:string;
  rule_3!:string;
  rule_4!:string;
  rule_5!:string;
  description!:string;

}

export class UserInProject{
  status!:boolean;
  rolename!:string;
  user_id!:number;
  pro_id!:number;
}

export class updateUserInProject{
  status!:boolean;
  rolename!:string;
}

export class proStatus{
  status!:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl ='http://localhost:8900/api/';
  private httpHeader = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');


  constructor(private http: HttpClient) { }

  //Get Users In project
  getUserInPro(id: any): Observable<any>{
    let API_URL =  `${this.baseUrl}/innerjoin/fristpage/${id}`;
    return this.http.get(API_URL,{headers : this.httpHeader})
    .pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  //Projects List
  getProjectsList(){
    return this.http.get(`${this.baseUrl}/project-list`);
  }

  getProjectStatusTrue(){
    return this.http.get(`${this.baseUrl}/projectstatusture-list`);
  }

  //addProject
  addProject(data:Project): Observable<any>{
    let API_URL = `${this.baseUrl}/add-project`;
    return this.http.post(API_URL,data)
    .pipe(
      catchError(this.handleError)
      )
    }

    //updateProject
    updateProject(id:any,data:updateProject):Observable<any>{
      let API_URL = `${this.baseUrl}/update-project/${id}`;
      return this.http.put(API_URL,data, {headers :this.httpHeader})
      .pipe(
        catchError(this.handleError)
        )
      }

    //deleteProject
    deleteProject(id:any):Observable<any>{
      let API_URL = `${this.baseUrl}/delete-project/${id}`;
      return this.http.delete(API_URL,{headers : this.httpHeader})
      .pipe(
        catchError(this.handleError)
      )
    }

    updateStatusProject(id:any,data:proStatus):Observable<any>{
      let API_URL = `${this.baseUrl}/update-statusproject/${id}`;
      return this.http.put(API_URL,data,{headers : this.httpHeader})
      .pipe(
        catchError(this.handleError)
      )
    }


      //addUserinProject
      addUserinProjects(data:UserInProject): Observable<any>{
        let API_URL = `${this.baseUrl}/add-userinpro`;
        return this.http.post(API_URL,data)
        .pipe(
          catchError(this.handleError)
        )
      }

    //updateUerinProject
    updateUserinProject(user_id:any, pro_id:any, data:updateUserInProject):Observable<any>{
      let API_URL = `${this.baseUrl}/update-userinpro/${user_id}/${pro_id}`;
      return this.http.put(API_URL,data,{headers :this.httpHeader})
      .pipe(
        catchError(this.handleError)
      )
    }

  //deleteUserinProject
  deleteUserinProject(user_id:any,pro_id:any):Observable<any>{
    let API_URL = `${this.baseUrl}/delete-userinpro/${user_id}/${pro_id}`;
    return this.http.delete(API_URL,{headers: this.httpHeader})
    .pipe(
      catchError(this.handleError)
    )
  }

  //getProject EditPage
  getProject(id:any):Observable<any>{
    let API_URL = `${this.baseUrl}/projects/${id}`;
    return this.http.get(API_URL, {headers : this.httpHeader})
    .pipe(map((res:any)=>{
      return res || {}
    },
      catchError(this.handleError)
    ))
  }

  //getRule EditPage
  getRule(id:any):Observable<any>{
    let API_URL = `${this.baseUrl}/rule/${id}`;
    return this.http.get(API_URL, {headers : this.httpHeader})
    .pipe(map((res:any)=>{
      return res || {}
    },
      catchError(this.handleError)
    ))
  }

  //getProjectDetail
    getProjectDetail(id:any): Observable<any>{
    let API_URL = `${this.baseUrl}/innerjoin/projectdetail/user/${id}`;
    return this.http.get(API_URL,{headers : this.httpHeader})
    .pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
  }


  //get Rule
  getRuleList(){
    return this.http.get(`${this.baseUrl}/rule-list`)
  }

  //getRoleName pro_id and user_id
  getRolename(user_id:any,pro_id:any) :Observable<any>{
    let API_URL = `${this.baseUrl}/innerjoin/userinpro/rolename/${user_id}/${pro_id}`;
    return this.http.get(API_URL,{headers : this.httpHeader})
    .pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )

  }

  //Get User by Username Or Email
  getUserDeatailByUsername(user:any):Observable<any>{
    let API_URL = `${this.baseUrl}/getuser/${user}`
    return this.http.get(API_URL,{headers : this.httpHeader})
    .pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  //Get Referee in Project //pro_id
  getRefereeinProject(id:any){
    return this.http.get(`${this.baseUrl}/innerjoin/refereeinpro/${id}`)
  }

  //getDocmentsinProjectsผลงานในโปรเจค
  getDocumentsInProject(id:any){
    return this.http.get(`${this.baseUrl}/documentsinPro/${id}`);
  }

  //getข้อมูลผู้ใช้งานในโปรเจคทั้งหมด
  getUserListinProject(id:any){
    return this.http.get(`${this.baseUrl}/innerjoin/userinpro/${id}`);
  }

  //getคำขอเข้าร่วม
  getRequestinProject(id:any){
    return this.http.get(`${this.baseUrl}/innerjoin/userinpro/request/${id}`);
  }

  //getscoreBoardPage Project statusfalse
  getScoreBoard(){
    return this.http.get(`${this.baseUrl}/projectstatusfalse-list`);
  }






   //Error
   handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
        //Hadle client error
        errorMessage = error.error.message;
    }else{
        //Hadle Server error
      errorMessage = `Error Code: ${(error.status)}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);

  }

  getProjectsData(){
    return this.http.get<any>('assets/projects.json')
        .toPromise()
        .then(res => <Projects []>res.projectData)
        .then(projectData => { return projectData; });
  }

  getRequestData(){
    return this.http.get<any>('assets/requestuser.json')
        .toPromise()
        .then(res => <requestUser []>res.requestData)
        .then(requestData => { return requestData; });
  }

  getDocumentData(){
    return this.http.get<any>('assets/document.json')
        .toPromise()
        .then(res => <Document []>res.documentData)
        .then(documentData => { return documentData; });
  }
  getUserData(){
    return this.http.get<any>('assets/users.json')
    .toPromise()
    .then(res => <Users []>res.userData)
    .then(userData => {return userData; });
  }




  togglepass(passwordID: string, toggleID :string){
    let password = document.getElementById(passwordID);
    let toggle = document.getElementById(toggleID);

    const type = password?.getAttribute('type')=='password' ? 'text' : 'password';
    password?.setAttribute('type',type);

    if(toggle?.className === "fas fa-eye-slash"){
      toggle.className = "fas fa-eye"
    }else if(toggle?.className === "fas fa-eye"){
      toggle.className = "fas fa-eye-slash"
    }
  }
}
