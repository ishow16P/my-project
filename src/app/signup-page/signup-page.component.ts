import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../share/projectservice/projectservice.service';
import { UserService } from  '../share/usersService/user-service.service';
import { Users } from '../share/type/user';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],

})

export class SignupPageComponent implements OnInit {

  userForm: FormGroup;
  usernameError : boolean = false;
  emailError : boolean = false;
  errorMsg : string ='';


  constructor(
    public formBuilder : FormBuilder,
    private projecyService :ProjectService,
    private formModule : FormsModule,
    private userService : UserService,
    private ngZone : NgZone,
    private router : Router

  ) {
    this.userForm = this.formBuilder.group({
      username : [''],
      fname : [''],
      lname : [''],
      email : [''],
      tel : [''],
      password: [''],
      status :[true],
      role_id :[3]
    });
  }

  ngOnInit(): void {
  }

  togglePassService(password: string, toggle:string){
    this.projecyService.togglepass(password,toggle);
  }




  onSubmit(pass1:any, pass2:any):any{
    if(pass1 === pass2){
      this.userService.createUser(this.userForm.value)
      .subscribe((res)=>{
        if(res.response_code == '1005'){
          this.usernameError = true;
          this.emailError = false;
          this.errorMsg = res.response_desc;
        }
        if(res.response_code == '1006'){
          this.emailError = true;
          this.usernameError = false;
          this.errorMsg = res.response_desc;
        }
        if(res.response_code == '1010')
        {
          console.log('Data added succesfully')
          window.alert('สร้างบัญชีเสร็จสิ้น')
          this.ngZone.run(() => this.router.navigateByUrl('/login-page'))
        }
      },(err)=>{
        console.log(err);
      })
    }else{
      window.alert("Password Not Match")
    }

  }






}
