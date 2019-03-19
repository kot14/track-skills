import { BehaviorSubject } from 'rxjs';

export class ModalService {

    private _checkedIsClose = new BehaviorSubject<any>(null);
    public checkedIsClose$ = this._checkedIsClose.asObservable();

    private _currentUser = new BehaviorSubject<any>(null);
    public currentUser$ = this._currentUser.asObservable();


    addCheckedIsClose(data: any) {
        this._checkedIsClose.next(data);
    }

    addCurrentUser(data: any) {
        this._currentUser.next(data);
    }
}
