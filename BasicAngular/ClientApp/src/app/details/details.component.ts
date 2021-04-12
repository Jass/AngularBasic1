import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core'
import { DataService } from '../data.service'
import { UserData } from '../user/user.component'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
  , providers: [DataService]
})

export class DetailsComponent implements OnInit {
  @Input() userId: number;
  @Output() change: EventEmitter<any> = new EventEmitter();


  user: UserData
  viewEdit: boolean

  constructor(private db: DataService) {
    this.viewEdit = false;
    console.log("ctor details component");

  }
  ngOnInit(): void {
    console.log("onInit");
    this.LoadUsers();
    this.viewEdit = true;
    }

  LoadUsers() {
      this.db.getUser(this.userId).subscribe
        (
          result => {
            this.user = result;
           

          }, error => console.error(error)
    );
  }
  SaveEvent() {
    var tempuser = this.user;
    this.db.postUser(tempuser).subscribe
      (
        result => {
          console.log('postUser result');
          console.log(result);
          this.LoadUsers();
          this.viewEdit = false;
          this.change.emit(null);
        }, error=> console.error(error)
      );
  }

  CancelEvent() {
  }
}

