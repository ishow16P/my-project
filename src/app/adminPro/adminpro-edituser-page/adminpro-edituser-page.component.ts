import { Component, OnInit, NgZone  } from '@angular/core';
import { requestUser } from 'src/app/share/type/projects';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-adminpro-edituser-page',
  templateUrl: './adminpro-edituser-page.component.html',
  styleUrls: ['./adminpro-edituser-page.component.css']
})
export class AdminproEdituserPageComponent implements OnInit {


  userList :any;
  projectId : any;

  constructor(
    private projectService : ProjectService,
    private router : Router,
    private ngzone : NgZone,
    private activetedRoute : ActivatedRoute
    ) {
      this. projectId = this.activetedRoute.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {

    this.projectService.getUserListinProject(this.projectId)
    .subscribe(res =>{
      this.userList = res
    })
  }

  removeUser(user:any){
    let conf = window.confirm(`ต้องการลบผู้ใช้งาน ${user.fname} ${user.lname} ออกจากโครงการใช่หรือไม่`)
    if(conf){
      this.projectService.deleteUserinProject(user.user_id,this.projectId).subscribe((res) =>{
        if(res.response_code === '1010'){
          window.alert("ลบผู้ใช้งานออกจากโครงสำเร็จ")
          this.ngzone.run(() => window.location.reload());
        }else{
          window.alert("ไม่สามารถลบผู้ใช้งานได้")
        }
      })
    }
  }

}
