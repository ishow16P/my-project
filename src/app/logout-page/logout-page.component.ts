import { Component, OnInit } from '@angular/core';
import { AuthenService } from'../share/authenService/authenService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

  constructor(
    private router :Router,
    private authenService : AuthenService
  ) { }

  ngOnInit(): void {
    this.authenService.logOut();
    this.router.navigate(['login-page'])
    .then(() => {
      window.location.reload();
    });

  }

}
