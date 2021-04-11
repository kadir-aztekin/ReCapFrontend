import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import('../../../assets/js/main');

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
}
