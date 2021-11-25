import { Component, OnInit, ViewChild,ElementRef,NgZone } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Projects,userInPro } from 'src/app/share/type/projects';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { Table } from 'primeng/table';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../share/usersService/user-service.service';
import { Users } from 'src/app/share/type/user'
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  @ViewChild('dt1') dt1: Table | undefined;
  @ViewChild('dt2') dt2: Table | undefined;


  createRuleView : boolean = true;

  projectDetailForm: FormGroup;

  //ขอเข้าร่วม
  joinData: FormGroup;
  proStatus : FormGroup;


  searchText:any

  getUserId :any;
  projects : any;
  projectId :any;
  adminproProjectId :any;

  ruleList: any;
  ruleId:any = 0;

  userDeatail:any[]=[];

  userInPro : userInPro[] =[];
  userStatusText:String='';


  first = 0;
  rows = 10;
  //popup
  pageNum:number = 1;
  active1: boolean = true;
  active2: boolean = false;
  active3: boolean = false;

  rule1 :any;

  todayen :any = formatDate(new Date(),'yyyy-MM-dd','en_US');
  end_date  :any;

  constructor(
    private fb:FormBuilder,
    private projectService :ProjectService,
    private route: Router,
    private ngzone : NgZone,
    private activatedRoute :ActivatedRoute,
    private userService : UserService
    ) {

    this.projectDetailForm = this.fb.group({
      pro_name :[''],
      pro_type_id :[],
      start_date :[''],
      end_date :[''],
      submit_start: [''],
      submit_end:[''],
      score_start: [''],
      score_end: [''],
      status:[true],
      rule_name: [''],
      rule_1:[''],
      rule_2: [''],
      rule_3: [''],
      rule_4: [''],
      rule_5: [''],
      description: [''],
    });

    this.proStatus = this.fb.group({
      status : [false]
    })


    this.getUserId =this.activatedRoute.snapshot.paramMap.get('id');



    this.joinData = this.fb.group({
      status :[0],
      rolename :['user'],
      user_id :[this.getUserId],
      pro_id :['']
    });

    this.userService.getUser(this.getUserId).subscribe(res =>{
      this.userDeatail[0] = res;
    })

    this.projectService.getProjectStatusTrue().subscribe((res:any) =>{
       console.log(res)
       this.projects = res;
       console.log(this.todayen)
        setInterval(() => {
         let i: number = 0;

         while(i < res.length){

         this.end_date = res[i].end_date
        // console.log(res[i].end_date)
         let proEnd_date = formatDate(this.end_date,'yyyy-MM-dd','en_US')
         if(proEnd_date <= this.todayen){
           console.log(res[i])

           this.projectService.getProject(res[i].id).subscribe((res:any) =>{

             if(res.status === true){
               console.log(res)
                this.projectService.updateStatusProject(res.id,this.proStatus.value).subscribe((res) =>{
                  console.log(res)

                })
              }
           })


         }
         i++

       }
        }, 30000);
     })

   }

  ngOnInit(): void {

    this.projectService.getUserInPro(this.getUserId).subscribe(res =>{

      this.userInPro = res;
    })

    this.projectService.getRuleList().subscribe((res) =>{
      this.ruleList = res;
    })






  }



//table
 applyFilterGlobal($event: any, stringVal: any) {
    this.dt1!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
 }
 //table
 applyFilterGlobal2($event: any, stringVal: any) {
  this.dt2!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
}
next() {
  this.first = this.first + this.rows;
}

prev() {
  this.first = this.first - this.rows;
}

reset() {
  this.first = 0;
}

isLastPage(): boolean {
  return this.projects ? this.first === (this.projects.length - this.rows): true;
}

isFirstPage(): boolean {
  return this.projects ? this.first === 0 : true;
}



  onSubmit() {
    console.log(this.projectDetailForm.value);
     let conf = window.confirm("ยืนยันการสร้างโปรเจ็คใช่หรือไม่")
     if(conf === true){
       console.log(this.projectDetailForm.value);
       this.projectService.addProject(this.projectDetailForm.value)
       .subscribe(res =>{
         console.log(res.response_desc)
         this.adminproProjectId = res.request_id

         this.joinData.setValue({status: true, rolename:'adminPro', user_id:this.getUserId, pro_id:this.adminproProjectId});
         this.projectService.addUserinProjects(this.joinData.value)
         .subscribe(()=>{
           this.ngzone.run(() => this.route.navigateByUrl(`adminpro/${this.adminproProjectId}/document-page/${this.adminproProjectId}`))
           .then(() => {
             window.location.reload();
           });
         })

       },(err)=>{
         console.log(err);
       })

     }
  }
  joinProject(project : any){
    if(project){
      let conf = window.confirm("คุณต้องการขอเข้าร่วม "+project.pro_name+" ใช่หรือไม่");
      this.projectId = project.id;
      this.joinData.setValue({status: false,rolename:'user',user_id:this.getUserId,pro_id:this.projectId});
      if(conf === true){

        this.projectService.addUserinProjects(this.joinData.value)
        .subscribe((res) =>{
          if(res.response_code === "1005"){
            window.alert(res.response_desc)
          }if(res.response_code === "1010"){
            window.alert("ส่งคำขอเรียบร้อแล้ว")
            this.ngzone.run(() => window.location.reload());
            console.log(res)
          }
        },(err)=>{
          console.log(err);
          window.alert('กรุณาเข้าสู่ระบบก่อน')
          this.ngzone.run(() => this.route.navigateByUrl('login-page'))
        })
      }
    }

  }

  goProjectPage(pro_id : any){

    this.projectService.getRolename(this.getUserId,pro_id)
    .subscribe((res) =>{
      console.log(res[0].rolename)
      if(res[0].rolename === 'adminPro'){
        this.ngzone.run(() => this.route.navigateByUrl(`/adminpro/${pro_id}/document-page/${pro_id}`)).then(() => {
          window.location.reload();
        });
        console.log(res.rolename)
      }
      if(res[0].rolename === 'referee'){
        this.ngzone.run(() => this.route.navigateByUrl(`/referee/${pro_id}/doc-list-page/${pro_id}`))
        console.log(res.rolename)
      }
      if(res[0].rolename === 'user'){
        this.ngzone.run(() => this.route.navigateByUrl(`/pro-detail-page/${pro_id}`))
        console.log(res.rolename)
      }
    })
  }

  rule(id:any){
    this.ruleId = id;

    this.projectDetailForm.controls['rule_name'].setValue(this.ruleList[this.ruleId].rule_name);
    this.projectDetailForm.controls['rule_1'].setValue(this.ruleList[this.ruleId].rule_1);
    this.projectDetailForm.controls['rule_2'].setValue(this.ruleList[this.ruleId].rule_2);
    this.projectDetailForm.controls['rule_3'].setValue(this.ruleList[this.ruleId].rule_3);
    this.projectDetailForm.controls['rule_4'].setValue(this.ruleList[this.ruleId].rule_4);
    this.projectDetailForm.controls['rule_5'].setValue(this.ruleList[this.ruleId].rule_5);
    this.projectDetailForm.controls['description'].setValue(this.ruleList[this.ruleId].description);

  }
}
