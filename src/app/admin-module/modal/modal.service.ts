import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ModalService {
    private modals: any[] = [];
    private _techData = new BehaviorSubject<any>(null);
    public techData$ = this._techData.asObservable();
    private _techView = new BehaviorSubject<any>(null);
    public techView$ = this._techView.asObservable();
    
    constructor() {}
        
    add(modal: any) {

        this.modals.push(modal);
    }

    remove(id: string) {
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string) {
        let modal: any = this.modals.filter(x => x.id === id)[0];
        modal.open();
    }

    close(id: string) {
        let modal: any = this.modals.filter(x => x.id === id)[0];
        modal.close();
    }

    addViewModal(data: any){
        this._techData.next(data);
    }


    addModal(index:any){
        
    }

    // add(index: number){
    //     this._techData.next(index);
    // }
}