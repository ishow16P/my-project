import { Component, OnInit ,NgZone } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Projects } from 'src/app/share/type/projects';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-editpro-page',
  templateUrl: './editpro-page.component.html',
  styleUrls: ['./editpro-page.component.css']
})
export class EditproPageComponent implements OnInit {

  projectUpdateForm: FormGroup;
  projectId :any;
  ruleId:any;

  constructor(
    private fb:FormBuilder,
    private projectService :ProjectService,
    private router : Router,
    private activatedRoute :ActivatedRoute,
    private ngzone : NgZone
  ) {


    this.projectId = this.activatedRoute.snapshot.paramMap.get('id')
    this.projectService.getProject(this.projectId).subscribe((resPro) =>{
      this.projectService.getRule(resPro.rule_id).subscribe((resRule) =>{
        this.ruleId = resPro.rule_id;
        this.projectUpdateForm.setValue({
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

    this.projectUpdateForm = this.fb.group({
      pro_name :[''],
      pro_type_id :[''],
      start_date :[''],
      end_date :[''],
      submit_start: [''],
      submit_end:[''],
      score_start: [''],
      score_end: [''],
      rule_id:[this.ruleId],
      rule_name: [''],
      rule_1:[''],
      rule_2: [''],
      rule_3: [''],
      rule_4: [''],
      rule_5: [''],
      description: [''],
    });
   }

  ngOnInit(): void {
  }
  backPage(){
    this.router.navigateByUrl(`/adminpro/${this.projectId}/document-page/${this.projectId}`)
  }

  OnSubmit(){
    console.log(this.projectUpdateForm.value);
     let conf =window.confirm("ยืนยันการแก้ไข")
     if(conf){
       this.projectService.updateProject(this.projectId,this.projectUpdateForm.value)
       .subscribe((res)=>{
         window.alert(res.response_desc)
        this.ngzone.run(() => this.router.navigateByUrl(`/adminpro/${this.projectId}/document-page/${this.projectId}`))
       })
     }
  }
}
