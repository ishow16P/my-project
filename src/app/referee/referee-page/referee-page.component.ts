import { formatDate } from '@angular/common';
import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router,ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';


@Component({
  selector: 'app-referee-page',
  templateUrl: './referee-page.component.html',
  styleUrls: ['./referee-page.component.css']
})
export class RefereePageComponent implements OnInit {

  getProid :any;

  projectDeatail:any;
  ruleName :any;
  refereeInPro :any;
  scoreStart : any;
  scoreEnd  : any;

  constructor(
    private ngzone:NgZone,
    private fb: FormBuilder,
    private router: Router,
    private projectService : ProjectService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getProid = this.activatedRoute.snapshot.paramMap.get('id')

    this.projectService.getProjectDetail(this.getProid).subscribe((res) =>{
      this.projectDeatail = res;
      this.ruleName = res[0].rule_name;
    })

    this.projectService.getProject(this.getProid).subscribe((res:any) =>{
      this.scoreStart = res.score_start ;
      this.scoreEnd = res.score_end;
    })

    this.projectService.getRefereeinProject(this.getProid).subscribe((res) =>{
      this.refereeInPro = res;

    })

  }

  ngOnInit(): void {
  }

}
