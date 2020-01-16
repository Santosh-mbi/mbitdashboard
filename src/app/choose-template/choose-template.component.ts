import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-choose-template',
  templateUrl: './choose-template.component.html',
  styleUrls: ['./choose-template.component.scss']
})
export class ChooseTemplateComponent implements OnInit {

  constructor(private router: Router) { }

  contentArray = new Array(20).fill('');
  returnedArray: string[];

  ngOnInit(): void {
    this.contentArray = this.contentArray.map((v: string, i: number) => `Template ${i + 1}`);
    this.returnedArray = this.contentArray.slice(0, 6);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

  chooseTemplate(){
    this.router.navigate(['/dashboard/layout'])
  }
  
 
}
