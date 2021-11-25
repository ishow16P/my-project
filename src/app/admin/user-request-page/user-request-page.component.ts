import { Component, OnInit, NgZone  } from '@angular/core';
import { requestUser } from 'src/app/share/type/projects';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-request-page',
  templateUrl: './user-request-page.component.html',
  styleUrls: ['./user-request-page.component.css']
})
export class UserRequestPageComponent implements OnInit {

  requestList :any;
  updateUserinPro : FormGroup;

  getProId : any;
  constructor(
    private projectService: ProjectService,
    private router : Router,
    private ngzone : NgZone,
    private activetedRoute : ActivatedRoute,
    private fb : FormBuilder
  ) {
    this.getProId = this.activetedRoute.snapshot.paramMap.get('id')

    this.updateUserinPro = this.fb.group({
      status:[true],
      rolename:['user']
    })
  }

  ngOnInit(): void {
    this.projectService.getRequestinProject(this.getProId)
    .subscribe(res =>{
      this.requestList = res
    })
  }


  addRequest(id:any){
    this.projectService.updateUserinProject(id, this.getProId,this.updateUserinPro.value)
    .subscribe((res) =>{
      if(res.response_code === '1010'){
        this.ngzone.run(() => window.location.reload());
      }else{
        window.alert("ไม่สามารถยอบรับคำของได้")
      }
    })

  }

  deleteRequest(id:any){
    this.projectService.deleteUserinProject(id, this.getProId).subscribe((res) =>{
      if(res.response_code === '1010'){
        this.ngzone.run(() => window.location.reload());
      }
    })
  }

}
