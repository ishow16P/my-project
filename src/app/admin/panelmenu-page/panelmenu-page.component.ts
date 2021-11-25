import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-panelmenu-page',
  templateUrl: './panelmenu-page.component.html',
  styleUrls: ['./panelmenu-page.component.css']
})
export class PanelmenuPageComponent implements OnInit {

  items: MenuItem[] =[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
      label: 'Projects',
      icon:'pi pi-fw pi-file',
      items: [
          {
              label: 'Project Manage',
              icon:'pi pi-fw pi-book',
              routerLink: ['/admin/projectlist-page'],
              routerLinkActiveOptions: { exact: true }
          },
          {
              label: 'Create Project',
              icon:'pi pi-plus',
              routerLink: ['/admin/create-pro-page'],
              routerLinkActiveOptions: { exact: true }
          }
      ]
      },
      {
      label: 'Users',
      icon:'pi pi-fw pi-user',
      items: [
          {
            label: 'Users Manage',
            icon:'pi pi-fw pi-user-plus',
            routerLink: ['/admin/users-list'],
            routerLinkActiveOptions: { exact: true }
          },
          {
              label: 'New',
              icon:'pi pi-fw pi-user-plus',
              routerLink: ['/admin/user-create'],
              routerLinkActiveOptions: { exact: true }
          },
      ]
      }
  ]

  }

}
