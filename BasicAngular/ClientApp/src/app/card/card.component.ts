import { Component, OnInit, Input } from '@angular/core'
import { Card } from '../app.component'

@Component({

  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
 
})


export class CardComponent implements OnInit {
  @Input() card: Card
  @Input() idx : number

  title: string = 'My Card Title'
  text: string = "my sample text"

  cardDate = Date()

  array = [1, 1, 2, 3, 5, 8, 13]
  numberColor: string; 

  disabled: boolean = false;

  imgUrl: string ='https://camo.githubusercontent.com/c5b95fc653e7928d7277fa065cd098187cb9b7ea2d4d976cef5215a0676d2424/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f616e67756c61722d6d6174657269616c2d657874656e73696f6e732f7061676573406d61737465722f6173736574732f616e67756c61722d6d6174657269616c2d657874656e73696f6e732d6c6f676f2e706e67'

  ngOnInit() {
    setTimeout(() => {
      this.disabled = true;
      this.imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnDVEqEe78HvQ9g-GMREzL1xFXgDRtcVuFUJL9qCq2XCCiAdy4oBSJXFNtdp9npGNrUM&usqp=CAU'
    }, 3000)
  }

  obj = {
    Name: 'name',
    info: {email:" my email"}
  }


  getInfo(): string {
    return "hello";
  }

  changeTitle() {
    this.title = "My New Card Title"
  }

  inputHandler(event: any) {
    this.title = event.target.value;
    
  }
  inputHandler1(value) {
    this.title = value;

  }

  changeHandler() {
    console.log(this.title);
  }
}
