import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminpro-panel-menu',
  templateUrl: './adminpro-panel-menu.component.html',
  styleUrls: ['./adminpro-panel-menu.component.css']
})
export class AdminproPanelMenuComponent implements OnInit {

  items: MenuItem[] =[];
  activeEditproject : boolean =true;
  constructor( private router : Router) { }

  ngOnInit(): void {
    this.items = [
      {
      label: 'โครงการ',
      icon:'pi pi-fw pi-file',
      items: [
          {
              label: 'จัดการโครงการ',
              icon:'pi pi-book',
              routerLink: ['/adminpro/editproject'],
              routerLinkActiveOptions: { exact: true }
          }
      ]
      },{
            label: 'ผลงาน',
            icon:'pi pi-folder',
            items: [
                {
                    label: 'จัดการผลงาน',
                    icon:'pi pi-fw pi-pencil',
                    routerLink: ['/adminpro/document-page'],
                    routerLinkActiveOptions: { exact: true }
                }
            ]
            },
            {
            label: 'สมาชิก',
            icon:'pi pi-fw pi-user',
            items: [
                {
                    label: 'คำขอเข้าร่วม',
                    icon:'pi pi-fw pi-user-plus',
                    routerLink:['/adminpro/request-user'],
                    routerLinkActiveOptions: { exact: true }

                },
                {
                    label: 'จัดการสมาชิก',
                    icon:'pi pi-fw pi-user-edit',
                    routerLink:['/adminpro/edit-user'],
                    routerLinkActiveOptions: { exact: true }
                }
            ]
            }

    ]


  }

}
