import { Component, OnInit, ViewChild,NgZone } from '@angular/core';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { Table } from 'primeng/table';
import { Router,ActivatedRoute } from '@angular/router';
import { DocumentsService } from 'src/app/share/documentsService/documents.service';

@Component({
  selector: 'app-documentlist-page',
  templateUrl: './documentlist-page.component.html',
  styleUrls: ['./documentlist-page.component.css']
})
export class DocumentlistPageComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  documentsList :any;
  getProId : any;

  constructor(
    private projectService: ProjectService,
    private router : Router,
    private activateRoute : ActivatedRoute,
    private documentsService: DocumentsService,
    private ngzone : NgZone
  ) {
    this.getProId = this.activateRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.projectService.getDocumentsInProject(this.getProId)
    .subscribe(res =>{
      this.documentsList = res
    })

  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
 }

 deleteDoc(userId:any,proId:any){
  let conf = window.confirm("ยืนยันการลบผลงาน")
  if(conf){
    this.documentsService.deleteDocument(userId,proId).subscribe((res) =>{
      if(res.response_code === '1010'){
        window.alert("ลบข้อมูลสำเร็จ")
        this.ngzone.run(() => window.location.reload())
      }
      if(res.response_code === '1005'){
        window.alert("ไม่สามารถลบข้อมูลได้")
      }
    })
  }
 }

}
