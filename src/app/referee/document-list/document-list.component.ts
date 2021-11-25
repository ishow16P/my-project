import { Component, OnInit, NgZone } from '@angular/core';
import { Document } from 'src/app/share/type/document';
import { ProjectService } from 'src/app/share/projectservice/projectservice.service';
import { ActivatedRoute,Router } from '@angular/router';
import { DocumentsService } from 'src/app/share/documentsService/documents.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: any = [];
  getProId : any;
  docId :any;


  constructor(
    private service : ProjectService,
    private activateRoute :ActivatedRoute,
    private router : Router,
    private documentsService :DocumentsService
    ) {
      this.getProId =  this.activateRoute.snapshot.paramMap.get('id')
      sessionStorage.setItem('proId',this.getProId)
     }

  ngOnInit(): void {

    this.documentsService.getDocumentsInPro(this.getProId).subscribe((res) =>{
      this.documents = res
    })
  }

  goDocDetailPage(docId:any){
    this.docId = docId;
    //console.log(this.docId)
    this.router.navigateByUrl(`referee/${this.getProId}/doc-detail/${this.docId}`)

  }

}
