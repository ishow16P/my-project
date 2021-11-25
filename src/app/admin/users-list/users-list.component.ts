import { Component, OnInit,ViewChild,NgZone } from '@angular/core';
import { Table } from 'primeng/table';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { Users } from 'src/app/share/type/user';
import { UserService } from 'src/app/share/usersService/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
@ViewChild('dt') dt: Table|undefined;

users :any =[];




  constructor(
    private projectService: ProjectService,
    private userService : UserService,
    private router : Router
  ) {
    this.userService.getListUsers().subscribe((res:any)=>{
      this.users = res;
    })
  }

  ngOnInit(): void {


  }

  applyFilterGlobal($event: any, stringVal: any){
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  goEditpage(id:any){
    console.log(id);
    this.router.navigateByUrl(`admin/user-edit/${id}`);
  }

  deleteUser(id:any){
    let conf = window.confirm("ยืนยันการลบข้อมูล")
    if(conf){
      this.userService.deleteUser(id).subscribe((res:any) =>{
        if(res.response_code === '1010'){
          window.alert('ลบข้อมูลสำเร็จ')
          window.location.reload();
        }else
        {
          window.alert('ไม่สามารถลบข้อมูลได้')
        }
      })
    }
  }


}
