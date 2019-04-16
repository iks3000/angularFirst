import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  condition: boolean=true;
  toggle(){
    this.condition=!this.condition;
  }

  condition2: boolean=true;
  toggle2(){
    this.condition2=!this.condition2;
  }

}
