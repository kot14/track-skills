import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/authServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.scss']
})
export class AdminModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
