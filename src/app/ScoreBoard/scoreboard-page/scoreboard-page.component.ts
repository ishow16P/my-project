import { Component, OnInit,ViewChild } from '@angular/core';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { UserService } from 'src/app/share/usersService/user-service.service';
import { Table } from 'primeng/table';
import { Router} from '@angular/router';

@Component({
  selector: 'app-scoreboard-page',
  templateUrl: './scoreboard-page.component.html',
  styleUrls: ['./scoreboard-page.component.css']
})
export class ScoreboardPageComponent implements OnInit {
  @ViewChild('dt1') dt1: Table | undefined;
  projectList : any =[];
  constructor(
    private projectService : ProjectService,
    private router : Router,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.projectService.getScoreBoard().subscribe((res:any) =>{
      this.projectList = res;
    })
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
 }

 goScoreListtPage(id:any){
   console.log(id)
   this.router.navigateByUrl(`scoreboardlist-page/${id}`)
 }
}
