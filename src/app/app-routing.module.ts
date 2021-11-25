import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProDetailPageComponent } from'./user/pro-detail-page/pro-detail-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { AccountDetailComponent } from './Accout/account-detail/account-detail.component';
import { AccountMenuComponent } from './Accout/account-menu/account-menu.component';
import { AccountChangePassComponent } from './Accout/account-change-pass/account-change-pass.component';





import { AdminproPanelMenuComponent } from './adminPro/adminpro-panel-menu/adminpro-panel-menu.component'
import { AdminproProjectPageComponent } from './adminPro/adminpro-project-page/adminpro-project-page.component';
import { AdminproDocumentPageComponent } from './adminPro/adminpro-document-page/adminpro-document-page.component';
import { AdminproEdituserPageComponent } from './adminPro/adminpro-edituser-page/adminpro-edituser-page.component';
import { AdminproRequestPageComponent } from './adminPro/adminpro-request-page/adminpro-request-page.component';

import { ScoreRefComponent } from './referee/score-ref/score-ref.component';
import { RefereePageComponent } from './referee/referee-page/referee-page.component';
import { DocumentListComponent } from './referee/document-list/document-list.component';
import { DocDetailPageComponent } from './referee/doc-detail-page/doc-detail-page.component';


import { PanelmenuPageComponent } from './admin/panelmenu-page/panelmenu-page.component';
import { ProjectListComponent } from './admin/project-list/project-list.component';
import { AddprojectPageComponent } from './admin/addproject-page/addproject-page.component';
import { EditprojectPageComponent } from './admin/editproject-page/editproject-page.component';
import { DocumentlistPageComponent } from './admin/documentlist-page/documentlist-page.component';
import { UserInproPageComponent } from './admin/user-inpro-page/user-inpro-page.component';
import { UserRequestPageComponent } from './admin/user-request-page/user-request-page.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { UserCreateComponent } from './admin/user-create/user-create.component';
import { EditproPageComponent } from './adminPro/editpro-page/editpro-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ScoreboardPageComponent } from './ScoreBoard/scoreboard-page/scoreboard-page.component';
import { ScoreboardDoclistComponent } from './ScoreBoard/scoreboard-doclist/scoreboard-doclist.component';
import { ScoreboardScoredetailComponent } from './ScoreBoard/scoreboard-scoredetail/scoreboard-scoredetail.component';




const routes: Routes = [
  {path : '', pathMatch:'full', redirectTo: 'projects-page/null'},
  {path : 'projects-page/:id', component: ProjectsPageComponent},
  {path : 'signup-page', component: SignupPageComponent},
  {path : 'login-page', component: LoginPageComponent},
  {path : 'logout', component: LogoutPageComponent},
  {path : 'pro-detail-page/:id', component: ProDetailPageComponent},
  {path : 'about-page', component: AboutPageComponent},

  {path: 'account',component:AccountMenuComponent,
  children :[
    {path : '', pathMatch:'full', redirectTo: 'accountDetail/:id'},
    {path : 'accountDetail/:id',component:AccountDetailComponent},
    {path : 'changePassword/:id',component:AccountChangePassComponent}
    ]
  },

  {path : 'scoreboard-page',component: ScoreboardPageComponent},
  {path : 'scoreboardlist-page/:id',component:ScoreboardDoclistComponent},
  {path : 'scoreboarddetail-page/:proid/:docid',component:ScoreboardScoredetailComponent},

  {path : 'adminpro/:id', component: AdminproProjectPageComponent,
    children :[
      {path : '', pathMatch:'full', redirectTo: 'document-page/:id'},
      {path : 'document-page/:id', component:AdminproDocumentPageComponent},
      {path : 'edit-user/:id', component:AdminproEdituserPageComponent},
      {path : 'request-user/:id', component:AdminproRequestPageComponent},
    ]
  },
  {path : 'adminpro_editPro-page/:id', component: EditproPageComponent}
  ,

  { path: 'referee/:id', component:RefereePageComponent,
      children:[
        {path : '', pathMatch:'full', redirectTo : 'doc-list-page/:id'},
        {path: 'doc-list-page/:id', component:DocumentListComponent},
        {path: 'doc-detail/:id', component:DocDetailPageComponent}

      ]
  },
  {path : 'ref-score-page/:id', component:ScoreRefComponent},


  {path: 'admin', component:PanelmenuPageComponent,
    children:[
      {path: '',pathMatch:'full', redirectTo: 'projectlist-page'},
      {path: 'projectlist-page',component:ProjectListComponent},
      {path: 'editproject-page/:id',component:EditprojectPageComponent},
      {path: 'doucument-list-page/:id',component:DocumentlistPageComponent},
      {path: 'user-inproject-page/:id',component:UserInproPageComponent},
      {path: 'user-request-page/:id',component:UserRequestPageComponent},
      {path: 'create-pro-page',component:AddprojectPageComponent},
      {path: 'users-list',component:UsersListComponent},
      {path: 'user-edit/:id',component:UserEditComponent},
      {path: 'user-create',component:UserCreateComponent}

    ]

  },








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
