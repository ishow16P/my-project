import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { of } from 'rxjs';
import { DocumentsService } from 'src/app/share/documentsService/documents.service';
import { ScoreService } from 'src/app/share/scoreService/score.service';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';

@Component({
  selector: 'app-doc-detail-page',
  templateUrl: './doc-detail-page.component.html',
  styleUrls: ['./doc-detail-page.component.css']
})
export class DocDetailPageComponent implements OnInit {

  getDocId : any;
  getProId : any = sessionStorage.getItem('proId');
  getUserId : any = sessionStorage.getItem('user_id');
  document : any =[];

  getScoreStart :any;
  getScoreEnd :any;


  getNowDate : any = formatDate(new Date(),'yyyy-MM-dd','en_US');

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private documentsService : DocumentsService,
    private scoreService : ScoreService,
    private projectService : ProjectService
  ) {
    this.getDocId = activatedRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.documentsService.getDocumentById(this.getDocId).subscribe((res:any) =>{
      this.document = res
     // console.log(this.document);
    })

    this.projectService.getProject(this.getProId).subscribe((res:any) =>{
      this.getScoreStart = res.score_start;
      this.getScoreEnd = res.score_end;


    })

  }
  goScorePage(){
    let scoreStart = formatDate(this.getScoreStart,'yyyy-MM-dd','en_US');
    let scoreEnd = formatDate(this.getScoreEnd,'yyyy-MM-dd','en_US');

    if(this.getNowDate >= scoreStart && this.getNowDate <= scoreEnd){
      this.scoreService.getCheckScore(this.getDocId,this.getUserId).subscribe((res:any) =>{
        console.log(res)
        if(res.length === 1){
          window.alert("คุณเคยให้คะแนนผลงานนี้ไปแล้ว")
        }
        else if(res.length === 0){
          this.router.navigateByUrl(`ref-score-page/${this.getDocId}`)
        }
        else{
          window.alert("ไม่สามารถให้คะแแนนผลงานนี้ได้")
        }
    })
    }if(this.getNowDate < scoreStart){
     // console.log(this.getNowDate < scoreStart)
      window.alert('ยังไม่เป้ดให้ทำการให้คะแนน\n จะเปิดให้คะแนนในวันที่  '+ scoreStart)
    }if(this.getNowDate > scoreEnd){
     // console.log(this.getNowDate > scoreEnd)
      window.alert('เกินระยะเวลากำหนดในการให้คะแนน')
    }




  }

  goBackPage(){
    this.router.navigateByUrl(`/referee/${this.getProId}/doc-list-page/${this.getProId}`)
  }
}
