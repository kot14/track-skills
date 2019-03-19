import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { directionDatabaseList } from '../model/direction.model';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  private _getData = new BehaviorSubject<any>(null);
  public getData$ = this._getData.asObservable();
  public getData1: any[];
  constructor(private http: HttpClient,
    private firestore: AngularFireDatabase) { }
    getData() {
      return this.http.get('https://ng-track-skills.firebaseio.com/direction-list.json')
      .subscribe(data => {
        this.getData1 = Object.keys(data).map(key =>({
            id:[key], value:data[key]
        }));
        this.addGetData(this.getData1);
        //console.log(this.getData1);
      })
    }
      addGetData (data: any) {
        this._getData.next(data);
      }
  
    postData(body: directionDatabaseList) {
        this.firestore.list('/direction-list').push(body);
     }
   
     putData(id: any, value: any) {
       return this.firestore.list('/direction-list').update(id, value);
     }
   
     deleteData(tech: any) {
       this.firestore.list('/direction-list').remove(tech);
     }      
}
