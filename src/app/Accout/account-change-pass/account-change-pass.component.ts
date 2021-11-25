import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/share/usersService/user-service.service';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-change-pass',
  templateUrl: './account-change-pass.component.html',
  styleUrls: ['./account-change-pass.component.css']
})
export class AccountChangePassComponent implements OnInit {

  oldpass :string='';
  newpass:any='';
  confpass :any='';
  getUserId : any;



  passwordForm : FormGroup

  checkoldPass : FormGroup

  constructor(
    private userService : UserService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private fb : FormBuilder
  ) {
     this.getUserId = this.activatedRoute.snapshot.paramMap.get('id')


     this.passwordForm = this.fb.group({
       password : ['']
     })

     this.checkoldPass = this.fb.group({
      password : ['']
    })
   }

  ngOnInit(): void {
  }

  ChangePass(){
    let conf = window.confirm("ยืนยันการเปลี่ยนรหัสผ่าน")
    if(conf){

      this.checkoldPass.setValue({password:this.oldpass})
       this.userService.checkPassword(this.getUserId,this.checkoldPass.value).subscribe((res:any) =>{
         console.log(res);
         if(res.response_code ='1010'){
           if(this.newpass === this.confpass){
            this.passwordForm.setValue({password:this.newpass})
            this.userService.changePassword(this.getUserId,this.passwordForm.value).subscribe((res:any) =>{
              if(res.response_code = '1010'){
              window.alert("เปลี่ยนรหัสผ่านสำเร็จ")
                window.location.reload();
              }else{
                window.alert("ไม่สามารถเปลี่ยนรหัสผ่าน")
              }
            })

           }else{
             window.alert("รหัสผ่านใหม่กับยืนยันรหัสผ่านใหม่ไม่ตรงกัน")
           }
        }else{
          window.alert("รหัสผ่านเก่าใหม่ถูกต้อง")
        }
      })


    }
  }

}
