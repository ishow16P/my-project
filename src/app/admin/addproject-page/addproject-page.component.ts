import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup,FormBuilder,FormArray } from '@angular/forms';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproject-page',
  templateUrl: './addproject-page.component.html',
  styleUrls: ['./addproject-page.component.css']
})
export class AddprojectPageComponent implements OnInit {

  projectForm: FormGroup;
  joinData: FormGroup;
  getUserId = sessionStorage.getItem('user_id')
  projectId : any;

  constructor(
    private fb : FormBuilder,
    private projectService: ProjectService,
    private router : Router,
    private ngZone : NgZone
  ) {
    this.projectForm = this.fb.group({
      pro_name :[''],
      pro_type_id :[''],
      start_date :[''],
      end_date :[''],
      submit_start: [''],
      submit_end:[''],
      score_start: [''],
      score_end: [''],
      rule_name: [''],
      rule_1:[''],
      rule_2: [''],
      rule_3: [''],
      rule_4: [''],
      rule_5: [''],
      description: ['']
    });

    this.joinData = this.fb.group({
      status :[0],
      rolename :['user'],
      user_id :[this.getUserId],
      pro_id :['']
    });
   }

  ngOnInit(): void {


  }

  OnSubmit(){
    console.log(this.projectForm.value);
     let conf = window.confirm("ยืนยันการสร้างโปรเจ็คใช่หรือไม่")
     if(conf === true){
       console.log(this.projectForm.value);
       this.projectService.addProject(this.projectForm.value)
       .subscribe(res =>{
         console.log(res.response_desc)
         this.projectId = res.request_id

         this.joinData.setValue({status: true, rolename:'adminPro', user_id:this.getUserId, pro_id:this.projectId});
         this.projectService.addUserinProjects(this.joinData.value)
         .subscribe(()=>{
           this.ngZone.run(() => this.router.navigateByUrl(`adminpro/${this.projectId}/document-page/${this.projectId}`))
           .then(() => {
             window.location.reload();
           });
         })

       },(err)=>{
         console.log(err);
       })

     }
  }









}
