import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  togo: boolean = true

  cards: Card[] = [
      { title: 'card1', text: 'text1' }
      , { title: 'card2', text: 'text2' }
      , { title: 'card3', text: 'text3' }
  ]

   
  ToggleCaded() {
    this.togo = !this.togo;

    


  }
}


