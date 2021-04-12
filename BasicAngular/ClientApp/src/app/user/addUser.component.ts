import { Component} from '@angular/core'
import { DataService } from '../data.service';


@Component(
  {
    selector: 'app-add-user',
    template: './addUser.component.html',
    providers: [DataService]
  }
)

export class AddUserComponent {

}
