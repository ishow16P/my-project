import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Scores } from 'src/app/share/type/score';
import { Router,ActivatedRoute } from '@angular/router';
import { ScoreService } from 'src/app/share/scoreService/score.service';
import { formatDate } from '@angular/common';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';

@Component({
  selector: 'app-score-ref',
  templateUrl: './score-ref.component.html',
  styleUrls: ['./score-ref.component.css']
})
export class ScoreRefComponent implements OnInit {

  scoreFrom : FormGroup;
  scoreRule1:number = 0;
  scoreRule2:number = 0;
  scoreRule3:number = 0;
  scoreRule4:number = 0;
  scoreRule5:number = 0;
  scoreNowDate :any = formatDate(new Date(),'yyyy-MM-dd','en_US');

  docId:any;
  proId:any;
  userId:any;

  scorePageDetail :any ;
  score_End :any

  scores: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(
    private fb : FormBuilder,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private scoreService : ScoreService,
    private projectService : ProjectService,
    private ngzone : NgZone
  ) {

    this.docId = this.activatedRoute.snapshot.paramMap.get('id')
    this.proId = sessionStorage.getItem('proId')
    this.userId = sessionStorage.getItem('user_id')

    this.scoreFrom = this.fb.group({
      score_1 :[this.scoreRule1],
      score_2 :[this.scoreRule2],
      score_3 :[this.scoreRule3],
      score_4 :[this.scoreRule4],
      score_5 :[this.scoreRule5],
      score_date :[this.scoreNowDate],
      doc_id :[this.docId],
      user_id :[this.userId]

    })


    this.projectService.getProject(this.proId).subscribe((res) =>{
      this.score_End = res.score_end;
      console.log(this.score_End)
    })

   }

  ngOnInit(): void {

    this.scoreService.getScorePageDetail(this.docId).subscribe((res) =>{
      this.scorePageDetail = res
      console.log(this.scorePageDetail)
    })



  }

  onSubmit(){
    let conf = window.confirm("ยืนยันการยันการให้คะแนน\n**ยืนยันแล้วจะไม่สามารถแก้ไขได้**")
    if(conf){
      console.log(this.scoreFrom.value);
       let scoreEndDate = formatDate(this.score_End,'yyyy-MM-dd','en_US')
       this.score_End = scoreEndDate
        if(this.scoreNowDate <= this.score_End ){
           this.scoreService.addScore(this.scoreFrom.value).subscribe((res) =>{
           if(res.response_code === '1010'){
             this.ngzone.run(() => this.router.navigateByUrl(`referee/${this.proId}/doc-list-page/${this.proId}`))
           }
           if(res.response_code === '1005'){
             window.alert(res.response_desc)
           }
         })
        }else{
         window.alert("ไม่สามารถให้คะแนนผลงานได้ เนื่องจากเกินระยะเวลาที่กำหนด");
        }
    }
  }

  goBackPage(){
    this.router.navigateByUrl(`referee/${this.proId}/doc-list-page/${this.proId}`)
  }


}
