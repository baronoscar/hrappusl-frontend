import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/mockdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 
 public loginForm: FormGroup | any;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }


  loginUser(){
   const email = this.loginForm.value;
    if(users.findIndex((elem) => elem.email == email) != -1){
       const password = this.loginForm.value.password;
       const foundUser = users.find(elem => elem.email == email);
       if(foundUser?.password != password){
         alert('Password entered is incorrect!!');
         return;
        }
        this.router.navigateByUrl('/dashboard');
       }else{
       console.log(`${email} not found`);
      }
  }

}
