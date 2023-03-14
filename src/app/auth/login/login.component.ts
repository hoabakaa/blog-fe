import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ILogin } from '../login-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormBuilder]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder){
    this.initLoginForm();
  }
  initLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.loginForm.get('userName')?.valueChanges.subscribe((value) => {
      console.log(value)
    })
  }

  onSubmit(){
    const valueLoginForm: ILogin = this.loginForm.value

    this.authService.login(valueLoginForm).subscribe(data => {
      if(data){
        console.log('login success');
        this.router.navigateByUrl('/home');
      }else{
        console.log('login fail')
      }
    })
  }

}
