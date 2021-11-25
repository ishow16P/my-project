import { Component, OnInit, NgZone  } from '@angular/core';
import { requestUser } from 'src/app/share/type/projects';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminpro-request-page',
  templateUrl: './adminpro-request-page.component.html',
  styleUrls: ['./adminpro-request-page.component.css']
})
export class AdminproRequestPageComponent implements OnInit {


  requestList :any;
  projectId : any;
  updateUserinPro : FormGroup;

  constructor(
    private projectService: ProjectService,
    private router : Router,
    private ngzone : NgZone,
    private activetedRoute : ActivatedRoute,
    private fb : FormBuilder
    ) {
      this.projectId = this.activetedRoute.snapshot.paramMap.get('id');

      this.updateUserinPro = this.fb.group({
        status:[true],
        rolename:['user']
      })
    }

  ngOnInit(): void {

    this.projectService.getRequestinProject(this.projectId)
    .subscribe(res =>{
      this.requestList = res
    })
  }

  addRequest(id:any){
    this.projectService.updateUserinProject(id, this.projectId,this.updateUserinPro.value)
    .subscribe((res) =>{
      if(res.response_code === '1010'){
        this.ngzone.run(() => window.location.reload());
      }else{
        window.alert("ไม่สามารถยอบรับคำของได้")
      }
    })

  }

  deleteRequest(id:any){
    this.projectService.deleteUserinProject(id, this.projectId).subscribe((res) =>{
      if(res.response_code === '1010'){
        this.ngzone.run(() => window.location.reload());
      }
    })
  }

}

