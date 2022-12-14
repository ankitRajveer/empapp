import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { HeaderComponent } from './admin/header/header.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component'
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagementComponent } from './admin/employee-management/employee-management.component';

const appRoutes:Routes =[
  {path:"", component: LoginComponent},
  {path:"admin",component:AdminComponent, 
  children:[
   
        {path:'',component:AdminhomeComponent},
        {path:'empmanage', component:EmployeeManagementComponent}
       ]}
  
];
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SidebarComponent,
    HeaderComponent,
    
    AdminhomeComponent,
    EmployeeManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
