import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  visibility: boolean = true;
  // переключаем переменную
  toggle(){
    this.visibility=!this.visibility;
  }

}
