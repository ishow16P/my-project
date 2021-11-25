import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { UserService } from 'src/app/share/usersService/user-service.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {


  createUserform :FormGroup;
  constructor(
    private projectService : ProjectService,
    private fb : FormBuilder,
    private userService : UserService,
    private router : Router
  ) {
    this.createUserform = this.fb.group({
      username : [''],
      fname :[''],
      lname :[''],
      email :[''],
      tel : [''],
      password:[''],
      status :[true],
      role_id :[3]
    });
   }

  ngOnInit(): void {

  }
  togglePassService(password:string, toggle:string){
    this.projectService.togglepass(password,toggle);
  }

  onSubmit(pass1:any, pass2:any){

    let conf = window.confirm("ยืนยันการสร้าง")
    if(conf){
      if(pass1 === pass2){
        this.userService.createUser(this.createUserform.value).subscribe((res:any) =>{
          if(res.response_code == '1005'){
            window.alert(res.response_code)
          }
          if(res.response_code == '1006'){
            window.alert(res.response_code)
          }
          if(res.response_code == '1010')
          {
            console.log('Data added succesfully')
            window.alert('สร้างบัญชีเสร็จสิ้น')
            window.location.reload();
          }
        },(err)=>{
          console.log(err);
        })

      }
    }else{
      window.alert("Password Not Match")
    }

  }


}
