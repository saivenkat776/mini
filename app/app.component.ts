import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Element=[];
  newServerName = '';
  newServerContent= '';
  //title = 'my-world';
  onAddBluePrint()
  {
    this.Element.push({
      type:'blueprint',
      name:this.newServerName,
content:this.newServerContent
    });
  }
}
