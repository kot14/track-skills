import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    token: string;

    private _isErrorStream = new BehaviorSubject<any>(null);
    public isErrorStream$ = this._isErrorStream.asObservable();

    constructor(
        private router: Router,
        public afAuth: AngularFireAuth
    ) { }

    signInUser(email: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(
                responce => {
                    this._isErrorStream.next(null);
                    this.sendEmailAndPasswordInLocalStorage(email, password);
                    this.router.navigate(['admin/user-list']);
                }
            )
            .catch(
                error => {
                    console.log(error);
                    this._isErrorStream.next(error);
                }
            );
    }

    sendEmailAndPasswordInLocalStorage(email: string, password: string) {
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
    }

    logout() {
        // firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        return localStorage.getItem('Email');
    }

    isAuthenticated() {
        return this.getToken() !== null;
    }
}
