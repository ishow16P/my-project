import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { ProjectService } from '../share/projectservice/projectservice.service';
import { Router } from '@angular/router';
import { AuthenService } from'../share/authenService/authenService';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],

})

export class LoginPageComponent implements OnInit {
  @Output() outUsername = new EventEmitter;

  id:any;
  loginForm:FormGroup;
  invalidLogin = false;
  errorMsg = false;
  Msg :any;

  constructor(
   public formBuilder : FormBuilder,
   private projecyService: ProjectService,
   private router :Router,
   private ngZone : NgZone,
   private authenService :AuthenService

  ) {
    this.loginForm = this.formBuilder.group({
      username : [''],
      password: [''],
    });
  }

  ngOnInit(): void {

  }

  checkLogin() {
      this.authenService.authenticate(this.loginForm.value)
      .subscribe(res =>{
        console.log(res);
        if(res.response_code === '1002'){
          this.Msg = res.response_desc;
          this.errorMsg = true;
          return
        }else if(res.response_code === '1003'){
          this.Msg = res.response_desc;
          this.errorMsg = true;
          return
        }
        else if(res.response_code === '1010'){
          this.id = res.request_id;
          console.log(this.id);
          sessionStorage.setItem('username', res.response_desc)
          sessionStorage.setItem('user_id',this.id)
          sessionStorage.setItem('roleId',res.response_roleid)
          if(res.response_roleid === 1){
            this.router.navigate([`admin/projectlist-page`])
            .then(() => {
              window.location.reload();
            });
            this.invalidLogin = false
            return true;
          }if(res.response_roleid === 2){
            this.router.navigate([`projects-page/${this.id}`])
            .then(() => {
              window.location.reload();
            });
            this.invalidLogin = false
            return true;
          }if(res.response_roleid === 3){
            this.router.navigate([`projects-page/${this.id}`])
            .then(() => {
              window.location.reload();
            });
            this.invalidLogin = false
            return true;
          }else{
            return;
          }

        }else{
          return
        }
      },error =>{
        console.log(error);
        return false;
      })


  }


  togglePassService(password:string, toggle:string){
    this.projecyService.togglepass(password,toggle);
  }
  onSubmit(){}


}
