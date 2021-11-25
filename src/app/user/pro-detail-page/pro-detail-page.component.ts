import { formatDate } from '@angular/common';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { Router,ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { ProjectDetail } from 'src/app/share/type/projects';
import { DocumentsService } from 'src/app/share/documentsService/documents.service';
import { ScoreService } from 'src/app/share/scoreService/score.service';

@Component({
  selector: 'app-pro-detail-page',
  templateUrl: './pro-detail-page.component.html',
  styleUrls: ['./pro-detail-page.component.css']
})
export class ProDetailPageComponent implements OnInit {

  formCreate : boolean = false;
  formUpdate : boolean = false;
  buttonUpdate = false
  documentForm: FormGroup;
  updateForm : FormGroup;
  getProId :any;

  projectDeatail:any;
  submitEndDate :any;
  scoreboard :any =[];

  ruleName :any;
  userId = sessionStorage.getItem('user_id');
  refereeinPro:any;

  docId :any;
  docNowDate :any = formatDate(new Date(),'yyyy-MM-dd','en_US');

  //documets reponse
  docResponse :any ;
  submitStart: any;

  submitSE :any =[

  ]

  constructor(
    private fb:FormBuilder,
    private route: Router,
    private ngZone :NgZone,
    private activatedRoute:ActivatedRoute,
    private projectService:ProjectService,
    private documentsService:DocumentsService,
    private scoreService : ScoreService
    ) {



    this.getProId = this.activatedRoute.snapshot.paramMap.get('id');

    this.projectService.getProjectDetail(this.getProId).subscribe(res =>{
      console.log(res)
      this.projectDeatail = res;
      this.ruleName = res[0].rule_name;
      console.log(this.ruleName)
    })

    this.projectService.getProject(this.getProId).subscribe((res) =>{
      this.submitEndDate = res.submit_end;
      this.submitStart = res.submit_start;
      console.log(this.submitEndDate)
    })

    this.projectService.getRefereeinProject(this.getProId).subscribe(res =>{
      this.refereeinPro = res;

    })




    this.documentsService.getDocument(this.userId,this.getProId).subscribe((res:any) =>{
      this.docResponse = res;
      if(res.length === 0){
        let data  =[{
          doc_name :'',
          doc_address :'',
          members : '',
          doc_date : '',
          status : false,
        }]
        this.docResponse = data;

      }else{
        this.docId = res[0].id;
        this.buttonUpdate = true

          this.scoreService.getScoreBoardDetail(this.getProId,this.docId).subscribe((res:any) =>{
          this.scoreboard = res;
           console.log(res)
           })
      }
    })


    //ส่งผลงาน
    this.documentForm = this.fb.group({
      doc_name : [''],
      doc_address:[''],
      members:[''],
      doc_date:[this.docNowDate],
      status:[true],
      user_id:[this.userId],
      pro_id:[this.getProId]
    });


    //แก้ไขผลงาน
    this.updateForm = this.fb.group({
      doc_name : [''],
      doc_address:[''],
      members:[''],
      doc_date:[this.docNowDate],
      status:[true],


    });



  }

  ngOnInit(): void {


  }



  onSubmit() {

    let conf = window.confirm("ยืนยันการส่งผลงาน")
    if(conf){
      let endDate = formatDate(this.submitEndDate,'yyyy-MM-dd','en_US')

      let startDate = formatDate(this.submitStart,'yyyy-MM-dd','en_US')

      if(this.docNowDate <= endDate && this.docNowDate >= startDate){

         this.documentsService.addDocment(this.documentForm.value)
         .subscribe((res) =>{
           if(res.response_code === '1010'){
             window.alert("ส่งผลงานสำเร็จ");
            this.ngZone.run(() => window.location.reload())
           }
           if(res.response_code === '1005'){
            window.alert(res.response_desc);
           }
         })

       }else if(this.docNowDate > endDate){
         window.alert("ไม่สามารถส่งผลงานได้ เนื่องจากเกินระยะเวลาที่กำหนด");
      }else if(this.docNowDate < startDate){
        window.alert("ไม่สามารถส่งผลงานได้ เนื่องจากยังไม่ถึงระยะเวลาที่กำหนด");
      }

    }

  }

  openUpdateForm(){
    let conf = window.confirm("คุณต้องการแก้ไขผลงานใช่หริอไม่?")
    if(conf){
      let sDate = formatDate(this.submitEndDate,'yyyy-MM-dd','en_US')
      this.submitEndDate = sDate;

      if(this.docNowDate <= this.submitEndDate){

        this.formUpdate = true;

        this.documentsService.getDocumentById(this.docId).subscribe((res) =>{
            this.updateForm.setValue({
              doc_name : res['doc_name'],
              doc_address: res['doc_address'],
              members:res['members'],
              doc_date:this.docNowDate,
              status:true
            })
        })
      }else {
        window.alert("ไม่สามารถแก้ไขผลงานได้\nเนื่องจากเลยระยะเวลาที่กำหนด")
      }


    }
  }

  updateDocument(){

    let conf = window.confirm("ยืนยันการแก้ไขข้อมูล")
    if(conf){
       console.log(this.updateForm.value)
        this.documentsService.updateDocument(this.docId,this.updateForm.value).subscribe((res) =>{
           if(res.response_code === '1010'){
             window.alert("แก้ไขผลงานสำเร็จ")
             window.location.reload();
           }
           if(res.response_code === '1005'){
             window.alert("ไม่สามารถแก้ไขผลงานได้")
           }

        })
    }
  }


}
