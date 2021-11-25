import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup,FormBuilder,FormArray } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';

@Component({
  selector: 'app-editproject-page',
  templateUrl: './editproject-page.component.html',
  styleUrls: ['./editproject-page.component.css']
})
export class EditprojectPageComponent implements OnInit {

  projectEditForm : FormGroup;
  addrefereeForm: FormGroup;
  getProId : any;
  getRuleId :any;

  refereeinPro :any;
  project :any ={};

  refereeName:any;
  refereeId:any;

  constructor(
    private fb:FormBuilder,
    private router : Router,
    private activateRoute : ActivatedRoute,
    private projectService : ProjectService,
    private ngzone : NgZone
  ) {

    this.getProId = this.activateRoute.snapshot.paramMap.get('id')

    this.projectService.getProjectDetail(this.getProId).subscribe((res:any) =>{
      this.project = res[0]
      console.log(this.project)
    })

    this.addrefereeForm = this.fb.group({
      status :[true],
      rolename :['referee'],
      user_id :[''],
      pro_id :[this.getProId]

    });

    this.projectService.getProject(this.getProId).subscribe((resPro) =>{
      this.projectService.getRule(resPro.rule_id).subscribe((resRule) =>{
        this.getRuleId = resPro.rule_id;
        this.projectEditForm.setValue({
          pro_name : resPro['pro_name'],
          pro_type_id : resPro['pro_type_id'],
          start_date : resPro['start_date'],
          end_date : resPro['end_date'],
          submit_start: resPro['submit_start'],
          submit_end: resPro['submit_end'],
          score_start: resPro['score_start'],
          score_end: resPro['score_end'],
          rule_id: resPro['rule_id'],
          rule_name: resRule['rule_name'],
          rule_1: resRule['rule_1'],
          rule_2: resRule['rule_2'],
          rule_3: resRule['rule_3'],
          rule_4: resRule['rule_4'],
          rule_5: resRule['rule_5'],
          description: resRule['description'],
        })
      })
    })


    this.projectEditForm = this.fb.group({
      pro_name :[''],
      pro_type_id :[''],
      start_date :[''],
      end_date :[''],
      submit_start: [''],
      submit_end:[''],
      score_start: [''],
      score_end: [''],
      rule_id:[this.getRuleId],
      rule_name: [''],
      rule_1:[''],
      rule_2: [''],
      rule_3: [''],
      rule_4: [''],
      rule_5: [''],
      description: [''],
    })
   }

  ngOnInit(): void {
    console.log(this.getProId);

    this.projectService.getRefereeinProject(this.getProId)
    .subscribe((res)=>{
      this.refereeinPro = res
    })
  }

  onSubmit(){
    let conf =window.confirm("ยืนยันการแก้ไข")
     if(conf){
       this.projectService.updateProject(this.getProId,this.projectEditForm.value)
       .subscribe((res)=>{
         window.alert(res.response_desc)
          window.location.reload();
       })
     }
  }

  addReferee(){
    let conf = window.confirm("ยืนยันการเพิ่มกรรมการ");
    if(conf){
      this.projectService.getUserDeatailByUsername(this.refereeName).subscribe((res)=>{
        if(res.response_code === '1010'){

          this.refereeId = res.reqId

          this.addrefereeForm.setValue({status: true, rolename:'referee', user_id:this.refereeId, pro_id:this.getProId})
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
    let conf = window.confirm(`ยืนยันการลบผู้ใช้งานชื่อ : ${fname} ${lname} ออกจากโครงการ`)
     if(conf){
       this.projectService.deleteUserinProject(id,this.getProId)
       .subscribe((res) =>{
         window.alert(res.response_desc)
         this.ngzone.run(() => window.location.reload())
       })
     }
  }
}
