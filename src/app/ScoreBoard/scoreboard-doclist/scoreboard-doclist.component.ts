import { Component, OnInit,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ScoreService } from 'src/app/share/scoreService/score.service';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-scoreboard-doclist',
  templateUrl: './scoreboard-doclist.component.html',
  styleUrls: ['./scoreboard-doclist.component.css']
})
export class ScoreboardDoclistComponent implements OnInit {
  @ViewChild('dtScore') dtScore: Table | undefined;

  documents:any =[];
  project : any;
  getProId :any;


  constructor(
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private scoreService : ScoreService,
    private projectService : ProjectService
  ) {
   this.getProId =  this.activatedRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.scoreService.getScoreDocLIst(this.getProId).subscribe((res:any) =>{
      this.documents = res;
      console.log(this.documents)
    })

    this.projectService.getProjectDetail(this.getProId).subscribe((res:any) =>{
      this.project = res;
      console.log(this.project)
    })
  }
  //table
 applyFilterGlobal($event: any, stringVal: any) {
  this.dtScore!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
}

goScoreDetail(id:any){
  this.router.navigateByUrl(`scoreboarddetail-page/${this.getProId}/${id}`)
}

}
