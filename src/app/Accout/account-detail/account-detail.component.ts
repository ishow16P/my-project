import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/share/usersService/user-service.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  getUserId : any;
  user: any =[];

  userForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private userService : UserService
  ) {
    this.getUserId =  this.activatedRoute.snapshot.paramMap.get('id')

    this.userService.getUser(this.getUserId).subscribe((res:any) =>{
      this.user = res;
      //console.log(this.user)
      this.userForm.setValue({
        username : res['username'],
        fname : res['fname'],
        lname : res['lname'],
        email : res['email'],
        tel : res['tel'],
        role_id: res['role_id']
      })
    })



    this.userForm = this.fb.group({
      username :[''],
      fname :[''],
      lname :[''],
      email :[''],
      tel :[''],
      role_id: [3]
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    let conf = window.confirm('ยืนยันการแก้ไข')
     if(conf){
     this.userService.updateUser(this.getUserId,this.userForm.value).subscribe((res:any) =>{
       if(res.response_code === '1010'){
         window.alert("แก้ไขข้อมูลสำเร็จ")
         window.location.reload();
       }else{
         window.alert("แก้ไขข้อมูลไม่สำเร็จ")
       }
     })
     }
    console.log(this.userForm.value)
  }

}
