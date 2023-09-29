import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onomatopiaList: string[] = [];

  onReceiveOnomatopia(onomatopia: string): void{
    this.onomatopiaList.push(onomatopia);
  }
}
