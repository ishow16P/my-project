import { group } from '@angular/animations';
import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/share/usersService/user-service.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  edituserform:FormGroup;

  getUserId : any

  disUsername: boolean = true;

  constructor(
    private fb : FormBuilder,
    private ngzone: NgZone,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private userService : UserService
  ) {

    this.getUserId = this.activatedRoute.snapshot.paramMap.get('id');

    this.userService.getUser(this.getUserId).subscribe((res:any) =>{
      this.edituserform.setValue({
        username: res['username'],
        fname: res['fname'],
        lname: res['lname'],
        email: res['email'],
        tel: res['tel'],
        role_id: res['role_id']
      })
    })

    this.edituserform = this.fb.group({
      username: [''],
      fname: [''],
      lname: [''],
      email: [''],
      tel: [''],
      role_id:['']
    })
   }

  ngOnInit(): void {

  }

  onSubmit(){
    let conf = window.confirm("ยืนยันการแก้ไข")
     if(conf){
       this.userService.updateUser(this.getUserId,this.edituserform.value).subscribe((res:any) =>{
          if(res.response_code === '1010'){
            this.ngzone.run(() => this.router.navigateByUrl('admin/users-list'))
          }else{
            window.alert("ไม่สามารถแก้ไขข้อมูลได้")
          }

        console.log(res)

       })
     }

  }


}
