import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccoundService } from 'src/app/services/accound.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private accoundService:AccoundService, private router:Router, private toastr:ToastrService) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)
      this.accoundService.login(loginModel).subscribe(response=>{
        this.toastr.info(response.message,"Sisteme Giriş Yapıldı")
        localStorage.setItem("token",response.data.token)
        
        this.router.navigateByUrl("/homepage")
      },responseError=>{
        this.toastr.error(responseError.error)
        
        console.log(responseError)
      })
    }
    
  }
}
