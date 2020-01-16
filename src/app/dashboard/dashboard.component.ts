import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showSidebar: boolean = true;

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (router.url === '/dashboard' || router.url === '/dashboard/choose-template') {
        this.showSidebar = false;
      }else{
        this.showSidebar = true;
      }
    })
  }
  ngOnInit() {
  }

}
