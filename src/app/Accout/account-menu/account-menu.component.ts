import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.css']
})
export class AccountMenuComponent implements OnInit {

  items: MenuItem[]=[];
  getUserId = sessionStorage.getItem('user_id');


  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.items = [{
      label: 'Account Infomation',
      items: [{
          label: 'Account Details',
          icon: 'pi pi-id-card',
          command: () => {
            this.goDetailPage();
          }
      },
      {
          label: 'ChangePassword',
          icon: 'pi pi-unlock',
          command: () => {
            this.goChangePass();
          }
      }
      ]}
  ];
  }

  goDetailPage(){
    this.router.navigateByUrl(`account/accountDetail/${this.getUserId}`)
  }
  goChangePass(){
    this.router.navigateByUrl(`account/changePassword/${this.getUserId}`)
  }

}
