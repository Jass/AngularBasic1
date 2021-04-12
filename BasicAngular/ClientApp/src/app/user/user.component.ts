import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core'
import { DataService } from '../data.service'


export interface UserData {
  id:number
  firstName: string
  lastName: string
  email: string
  age: number
  role: string
  isActive: boolean
}

@Component(
  {
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
    , providers: [DataService]
  }
)

export class UserComponent   {

  @Input() user: UserData
  @Output() onChange: EventEmitter<boolean> = new EventEmitter < boolean>();


  viewDetails: boolean = false



  constructor(private db: DataService) {
    this.viewDetails = false;
    console.log("ctor user component");

  }

      getImageActive(): string {
        return this.user.isActive
          ? 'https://images.megapixl.com/5131/51310687.jpg'
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmhcKKGZDodf3C3Hd7MaaK8IgZ8vSn0aXuX3d8zS3KNzfjVQXmW-WQ4_r6Uq9dqpU8zs&usqp=CAU'
      }
  
  SetViewDetails() {
        console.log(this.user.id);
        this.viewDetails = true;
  }

  Emitter() {
    console.log('emitter works');
   
   
    this.viewDetails = false;
    this.onChange.emit(true);
    //this.change.emit(result);
    this.db.getUser(this.user.id).subscribe(
      result => {
        this.user = result;
      }, error => console.error(error)
    );
  }

  SaveEvent() {
    var tempuser = this.user;
    this.db.putUser(tempuser).subscribe
      (
        result => {
          this.Emitter();
        }, error => console.error(error)
      );
  }

 

  DeleteEvent() {
    console.log('delete event');
    console.log(this.user.id);
    this.db.deleteUser(this.user.id)
      .subscribe(
        data => this.Emitter()
    );
  }

  ReLoadUser() {
    this.db.getUser(this.user.id).subscribe
      (
        result => {
          this.user = result;


        }, error => console.error(error)
    );

  }

  CancelEvent() {
  }


}

