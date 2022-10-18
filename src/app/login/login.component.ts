import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  //1.Using FormControl
  loginForm = new FormGroup({
    username: new FormControl(''
                 ),
    password: new FormControl(''
                        )
   
      
 });

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  
  checkLogin(){
    this.loginForm.reset();
     this.router.navigate(['/admin']);
  }
}
