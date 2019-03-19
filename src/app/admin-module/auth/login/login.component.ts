import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../authServices/auth.service';
import { Router } from '@angular/router';
import { parse } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public status;
  public emailInput: string;

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['admin']);
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)])
    });

    this.authService.isErrorStream$.subscribe(data => {
      if (data) {
        this.status = data;
      }
    });

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  isTrueCharacter(event: any) {
    const pattern = '/|,?_&^%$#!*()+=-';
    if (pattern.includes(event.data)) {
      event.target.value = event.target.value.substr(0, event.target.value.length - 1);
    }
  }

  onSubmit() {
    // localStorage.clear();
    const email = this.email.value;
    const password = this.password.value;
    this.authService.signInUser(email, password);
  }

}
