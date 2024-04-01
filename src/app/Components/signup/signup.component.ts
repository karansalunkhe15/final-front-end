import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.employeeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      gender: ['']
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    let email = this.employeeForm.value.email; // Corrected typo from 'eamil' to 'email'
    let password = this.employeeForm.value.password;
    let firstName = this.employeeForm.value.firstName;
    let lastName = this.employeeForm.value.lastName;
    let phoneNumber = this.employeeForm.value.phoneNumber;
    let confirmPassword = this.employeeForm.value.confirmPassword;
    let gender = this.employeeForm.value.gender;
    
    let payload = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      confirmPassword: confirmPassword,
      gender: gender
    };


    if (this.employeeForm.valid) {
      this.loginService.addEmployee(payload).subscribe(
        response => {
          console.log('Employee added!', response);
          this.router.navigate(['/'])
        },
        error => {
          console.error('Error adding employee', error);
       
        }
      );
    }
  }
}


