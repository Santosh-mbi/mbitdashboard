import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {
  public selecteditem: any;

  constructor() { }

  ngOnInit() {
  }
  

 onClick(title:any, basicModal:any){

   this.selecteditem = title;

   basicModal.show()

  //  console.log(this.selecteditem); // print in console

 }
}
