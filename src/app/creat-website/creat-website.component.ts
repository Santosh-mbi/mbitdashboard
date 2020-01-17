import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-website',
  templateUrl: './creat-website.component.html',
  styleUrls: ['./creat-website.component.scss']
})
export class CreatWebsiteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  chooseTemplate(){
    this.router.navigate(['dashboard/choose-template'])
  }

}
