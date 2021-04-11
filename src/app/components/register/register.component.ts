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
  selector: 'app-register',
  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private accoundService:AccoundService, private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      let registerModel = Object.assign({},this.registerForm.value)
      this.accoundService.register(registerModel).subscribe(response=>{
        this.toastr.info(response.message)
        localStorage.setItem("token",response.data.token)
        this.router.navigateByUrl("/login")
      },(responseError) => {
        if (responseError.error.Errors.length > 0) {
          console.log(responseError.error.Errors); // array geldiğinden foreachde ya da forda döncez
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastr.error(
              responseError.error.Errors[i].ErrorMessage,
              'Doğrulama hatası'
            );
            
          }
        }
      }
    );
      }
      else{
        this.toastr.error("hede");
      }
    }
  
  }





  
 
