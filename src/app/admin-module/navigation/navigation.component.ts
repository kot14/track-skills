import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AdminServiceService } from './service/admin-service.service';
import { AuthGuard } from '../auth/authGuards/auth-guard.guard';
import { AuthService } from '../auth/authServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.2s ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class NavigationComponent implements OnInit {

  constructor(public adminService: AdminServiceService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.adminService.showMenu = !this.adminService.showMenu;
  }

  logOut() {
    localStorage.clear();
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
