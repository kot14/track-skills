import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs';
import { TechDatabaseList } from '../navigation/tech-list/tech.model';

@Injectable({
  providedIn: 'root'
})
export class TechListServiceService {
  private _getData = new BehaviorSubject<any>(null);
  public getData$ = this._getData.asObservable();
  public getData1: any[];
  constructor(private http: HttpClient,
    private firestore: AngularFireDatabase) { }

    getData() {
      return this.http.get('https://ng-track-skills.firebaseio.com/techList.json')
      .subscribe(data => {
        this.getData1 = Object.keys(data).map(key =>({
            id:[key], value:data[key]
        }));
        this.addGetData(this.getData1);
        console.log(this.getData1);
      })
    }

    addGetData (data: any) {
      this._getData.next(data);
    }

  postData(body: TechDatabaseList) {
      this.firestore.list('/techList').push(body);
   }
 
   putData(id: any, value: any) {
     return this.firestore.list('/techList').update(id, value);
   }
 
   deleteData(tech: any) {
     this.firestore.list('/techList').remove(tech);
   }
}
