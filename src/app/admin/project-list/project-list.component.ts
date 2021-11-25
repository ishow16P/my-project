import { AbstractType, Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';

import { Table } from 'primeng/table';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @ViewChild('dt') dt: Table | undefined;
  projects : any= [];
  items: MenuItem []= [];

  getProId : any;

  getuser_id : any = sessionStorage.getItem('user_id');

  constructor(
    private serviceProject:ProjectService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.serviceProject.getProjectsList().subscribe((res:any) =>{
      this.projects = res;
    })

    this.items = [
      //routerLink: [`/admin/editproject-page/${this.getProId}`]
      {label: 'โครงการ', icon: 'pi pi-book',command: () => {
        this.goEditPage();}},
      {label: 'ผลงาน', icon: 'pi pi-file', command: () => {
        this.goDocListPage();}},
      {label: 'สมาชิก', icon: 'pi pi-user', command: () => {
        this.goUserinProPage();}},
      // {separator:true},
      {label: 'คำขอเข้าร่วม', icon: 'pi pi-reply', command: () => {
        this.goRequestUser();}},
      {separator:true},
      {label: 'ลบ', icon: 'pi pi-trash',command: () => {
        this.deleteProject();}},
  ];
  }


  applyFilterGlobal($event: any, stringVal: any){
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
  deleteProject(){
    let conf = window.confirm('ยืนยันการลบโครงการ');
    if(conf){
      this.serviceProject.deleteUserinProject(this.getuser_id,this.getProId).subscribe((res:any) =>{
        if(res.response_code === '1010'){
          this.serviceProject.deleteProject(this.getProId).subscribe((res:any) =>{
            if(res.response_code === '1010'){
              window.alert('ลบโครงการสำเร็จ')
              window.location.reload();
            }else{
              window.alert('ไม่สามารถลยโครงการได้');
            }

          })
        }else{
          window.alert('ไม่สามารถลยโครงการได้');
        }
      })


    }

  }
  getProjectid(id:any){
    this.getProId = id

  }

  goEditPage(){
    this.router.navigateByUrl(`/admin/editproject-page/${this.getProId}`)
  }
  goDocListPage(){
    this.router.navigateByUrl(`/admin/doucument-list-page/${this.getProId}`)
  }
  goUserinProPage(){
    this.router.navigateByUrl(`/admin/user-inproject-page/${this.getProId}`)
  }
  goRequestUser(){
    this.router.navigateByUrl(`/admin/user-request-page/${this.getProId}`)
  }



}
