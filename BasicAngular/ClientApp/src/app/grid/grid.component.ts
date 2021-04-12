import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserData } from '../user/user.component';
//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [DataService]
})

export class GridComponent implements OnInit {
  
  _users: UserData[]

  constructor(private _service: DataService) {

  }

  ngOnInit(): void {
    this.loadUsers(); 
  }

  loadUsers() {
    this._service.getUsers().subscribe
      (
        result => {
          this._users = result;
          console.log("hello");
          console.log(this._users);
        }, error => console.error(error)
      );
  }

  ChangedEvent(boolVal) {
    if (boolVal != undefined
          && boolVal)
    {
          this.loadUsers();
    }


    AddUserEvent()
    {

    }
  }
  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<UserData[]>(baseUrl + 'userdatagrid').subscribe
  //    (result => {
  //      this.users = result;
  //    }, error => console.error(error)
  //    );
  //}



}
