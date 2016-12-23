import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

@Injectable()
export class Auth {

  private authState:  FirebaseAuthState;

  constructor(public http: Http, public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      console.log(this.authState);
    });


  }
  // Methods
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
  //   return this.auth$.login({
  //     provider: AuthProviders.Facebook,
  //     method: AuthMethods.Popup
  //   });
  // }

  signIn(user): void{
    // this.auth$.login(user)
  }
  signInAnon(): void{
    this.auth$.login()
  }

  signOut(): void {
    this.auth$.logout();
  }

  displayName(): string {
    if (this.authState != null) {
      return this.authState.facebook.displayName;
    } else {
      return '';
    }
  }
}
