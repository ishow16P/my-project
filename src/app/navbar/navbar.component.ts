import { AbstractType, Component, OnInit } from '@angular/core';
import { AuthenService } from'../share/authenService/authenService';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  username:any = sessionStorage.getItem('username');
  roleId:any = sessionStorage.getItem('roleId');
  getUserId :any = sessionStorage.getItem('user_id');
  constructor(
    public authenService :AuthenService,
    private router:Router,
    private ngzone :NgZone
  ) {

   }

  ngOnInit(): void {

  }

  projectPage(){
    this.router.navigate([`projects-page/${sessionStorage.getItem('user_id')}`])
  }

  logOut(){
    this.authenService.logOut();

  }
}
