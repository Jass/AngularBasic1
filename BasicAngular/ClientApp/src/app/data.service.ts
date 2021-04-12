import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserData } from './user/user.component';
import { Observable } from 'rxjs';


@Injectable()

export class DataService {

        _baseUrl: string;

        constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
          this._baseUrl = baseUrl + 'userdatagrid';
          }

        getUsers(): Observable< UserData[]> {
          var d = this.http.get<UserData[]>(this._baseUrl);
          console.log(d);
          return d;
        }

      getUser(id: number): Observable<UserData> {
          return this.http.get<UserData>(this._baseUrl + '/' + id);
  }

  updateUser(user: UserData) {
    console.log("update user");
    console.log(user);
    var result = this.http.put(this._baseUrl, user);
    console.log(result);

  }


  postUser(user: UserData): Observable<UserData> {
    console.log("post user");
    console.log(user);
    var result = this.http.post<UserData>(this._baseUrl, user);
    console.log(result);
    return result;

  }

  putUser(user: UserData): Observable<UserData> {
    console.log("put user");
    console.log(user);
    var result = this.http.put<UserData>(this._baseUrl, user);
    console.log(result);
    return result;

  }

  deleteUser(id: number): Observable<object> {
    console.log("delete user");

    var t = this.http.delete(this._baseUrl + '/' + id);
    return t;
      
  }
}
