import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDatabaseList } from '../model/userList.model';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

const SERVER_PATH = environment.apiServerPath;
const USER_LIST_JSON = environment.USER_LIST_JSON;
const USER_LIST = environment.USER_LIST;

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  private _getData = new BehaviorSubject<any>(null);
  public getData$ = this._getData.asObservable();
  public getData1: any[];
  public getData2 = [];


  constructor(private http: HttpClient,
              private firestore: AngularFireDatabase) { }

  getData() {
    return this.http.get(SERVER_PATH + USER_LIST_JSON)
      .subscribe(data => {
        this.getData1 = Object.keys(data).map(key => ({ id: [key], value: data[key] }));
        this.addGetData(this.getData1);
      });
  }

  postData(body: UserDatabaseList) {
    this.firestore.list(USER_LIST).push(body);
  }

  putData(userId: any, value: any) {
    return this.firestore.list(USER_LIST).update(userId, value);
  }

  deleteData(userId: any) {
    this.firestore.list(USER_LIST).remove(userId);
  }


  addGetData(data: any) {
    this._getData.next(data);
  }


}
