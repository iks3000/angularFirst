import { Component } from '@angular/core';

@Component({
  selector: 'app-displaying-data',
  templateUrl: './displaying-data.component.html',
  styleUrls: ['./displaying-data.component.css']
})
export class DisplayingDataComponent {
  name = 'Tom';

  inputText = 'Some text';

  count: number = 0;
  increase($event) : void {
    this.count++;
    console.log($event) // можем передавать информацию о событии через объект $event
  }


  anotherName: string = 'Jerry';
}
