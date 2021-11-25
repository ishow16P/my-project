import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ScoreService } from 'src/app/share/scoreService/score.service';

@Component({
  selector: 'app-scoreboard-scoredetail',
  templateUrl: './scoreboard-scoredetail.component.html',
  styleUrls: ['./scoreboard-scoredetail.component.css']
})
export class ScoreboardScoredetailComponent implements OnInit {

  getProId :any;
  getDocId :any;

  scoreboard :any =[]
  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private scoreService : ScoreService
  ) {
   this.getProId = this.activatedRoute.snapshot.paramMap.get('proid')
   this.getDocId = this.activatedRoute.snapshot.paramMap.get('docid')

   this.scoreService.getScoreBoardDetail(this.getProId,this.getDocId).subscribe((res:any) =>{
     this.scoreboard = res;
   })
  }

  ngOnInit(): void {
    console.log(this.getProId,this.getDocId)
  }

  goBack(){
    this.router.navigateByUrl(`scoreboardlist-page/${this.getProId}`)
  }

}
