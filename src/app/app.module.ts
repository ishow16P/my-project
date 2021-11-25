import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { Ng2SearchPipeModule } from 'ng2-search-filter';



import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { EditproPageComponent } from './adminPro/editpro-page/editpro-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ScoreboardPageComponent } from './ScoreBoard/scoreboard-page/scoreboard-page.component';
import { ScoreboardDoclistComponent } from './ScoreBoard/scoreboard-doclist/scoreboard-doclist.component';
import { ScoreboardScoredetailComponent } from './ScoreBoard/scoreboard-scoredetail/scoreboard-scoredetail.component';
import { AccountDetailComponent } from './Accout/account-detail/account-detail.component';
import { AccountMenuComponent } from './Accout/account-menu/account-menu.component';
import { AccountChangePassComponent } from './Accout/account-change-pass/account-change-pass.component';






import { ProDetailPageComponent } from'./user/pro-detail-page/pro-detail-page.component';

import { AdminproProjectPageComponent } from './adminPro/adminpro-project-page/adminpro-project-page.component';
import { AdminproDocumentPageComponent } from './adminPro/adminpro-document-page/adminpro-document-page.component';
import { AdminproEdituserPageComponent } from './adminPro/adminpro-edituser-page/adminpro-edituser-page.component';
import { AdminproRequestPageComponent } from './adminPro/adminpro-request-page/adminpro-request-page.component';
import { AdminproPanelMenuComponent } from './adminPro/adminpro-panel-menu/adminpro-panel-menu.component';

import { ScoreRefComponent } from './referee/score-ref/score-ref.component';
import { RefereePageComponent } from './referee/referee-page/referee-page.component';
import { DocumentListComponent } from './referee/document-list/document-list.component';
import { DocDetailPageComponent } from './referee/doc-detail-page/doc-detail-page.component';

//admin
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

//fontend-libarly
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MenuModule} from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsPageComponent,
    FooterComponent,
    LoginPageComponent,
    SignupPageComponent,
    AdminproProjectPageComponent,
    ProDetailPageComponent,
    AdminproPanelMenuComponent,
    AdminproDocumentPageComponent,
    AdminproEdituserPageComponent,
    AdminproRequestPageComponent,
    ScoreRefComponent,
    RefereePageComponent,
    DocumentListComponent,

    PanelmenuPageComponent,
    ProjectListComponent,
    AddprojectPageComponent,
    EditprojectPageComponent,
    DocumentlistPageComponent,
    UserInproPageComponent,
    UserRequestPageComponent,
    UsersListComponent,
    UserEditComponent,
    UserCreateComponent,
    EditproPageComponent,
    LogoutPageComponent,
    AboutPageComponent,
    ScoreboardPageComponent,
    ScoreboardDoclistComponent,
    DocDetailPageComponent,
    ScoreboardScoredetailComponent,
    AccountDetailComponent,
    AccountMenuComponent,
    AccountChangePassComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PasswordModule,
    InputTextModule,
    DropdownModule,
    AccordionModule,
    CardModule,
    ButtonModule,
    TableModule,
    MessagesModule,
    MessageModule,
    Ng2SearchPipeModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    MatRadioModule,
    SplitButtonModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    InputTextareaModule,
    TabMenuModule,
    MenuModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
