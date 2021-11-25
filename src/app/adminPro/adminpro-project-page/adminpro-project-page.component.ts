import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, } from '@angular/forms';
import { Projects } from 'src/app/share/type/projects';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { MenuItem } from 'primeng/api';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-adminpro-project-page',
  templateUrl: './adminpro-project-page.component.html',
  styleUrls: ['./adminpro-project-page.component.css']
})
export class AdminproProjectPageComponent implements OnInit {

  addrefereeForm: FormGroup;
  test:any ;

  projectDeatail :any;
  refereeinPro :any;

  refereeName:any;
  refereeId:any;

  items :MenuItem[] =[];

  projectId : any;

  constructor(
    private fb:FormBuilder,
    private projectService :ProjectService,
    private router : Router,
    private ngzone : NgZone,
    private activetedRoute : ActivatedRoute

    ) {
      this.addrefereeForm = this.fb.group({
        status :[true],
        rolename :['referee'],
        user_id :[''],
        pro_id :[this.projectId]

      });

      this.projectId = this.activetedRoute.snapshot.paramMap.get('id');
      console.log(this.projectId)
     }




  ngOnInit(): void {

    this.projectService.getProjectDetail(this.projectId)
    .subscribe((res) =>{
      this.projectDeatail = res
    })

    this.projectService.getRefereeinProject(this.projectId)
    .subscribe((res)=>{
      this.refereeinPro = res
    })



    this.items =[
      {label:'จัดการผลงาน', icon:'fa fa-fw fas fa-file',routerLink:[`/adminpro/${this.projectId}/document-page/${this.projectId}`]},
      {label:'จัดการสมาชิก', icon:'fa fa-fw fas fa-user',routerLink:[`/adminpro/${this.projectId}/edit-user/${this.projectId}`]},
      {label:'คำขอเข้าร่วม', icon:'fa fa-fw fas fa-user-plus',routerLink:[`/adminpro/${this.projectId}/request-user/${this.projectId}`]}
      ];
  }



  addReferee(){
    let conf = window.confirm("ยืนยันการเพิ่มกรรมการ");
    if(conf){
      this.projectService.getUserDeatailByUsername(this.refereeName).subscribe((res)=>{
        if(res.response_code === '1010'){

          this.refereeId = res.reqId

          this.addrefereeForm.setValue({status: true, rolename:'referee', user_id:this.refereeId, pro_id:this.projectId})
          this.projectService.addUserinProjects(this.addrefereeForm.value)
          .subscribe((res)=>{
            if(res.response_code === '1005'){
              window.alert(res.response_desc)
            }
            if(res.response_code === '1010'){
              window.alert(res.response_desc)
            this.ngzone.run(() => window.location.reload())
            }
          })
        }if(res.reqId === 0){
          window.alert("ไม่พบผู้ใช้งานในระบบ")
        }
      })
    }

  }


  deleteReferee(id:any, fname:any,lname:any){
    console.log(id)
     let conf = window.confirm(`ยืนยันการลบผู้ใช้งานชื่อ : ${fname} ${lname} ออกจากโครงการ`)
     if(conf){
       this.projectService.deleteUserinProject(id,this.projectId)
       .subscribe((res) =>{
         window.alert(res.response_desc)
         this.ngzone.run(() => window.location.reload())
       })
     }

  }
  goEditProject(){
    this.router.navigateByUrl(`/adminpro_editPro-page/${this.projectId}`)
  }

}
