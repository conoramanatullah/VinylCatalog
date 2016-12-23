// Package imports
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
// Components
import { MyApp } from './app.component';
import { LibraryPage } from '../pages/library/library';
import { ManageLibraryPage } from '../pages/manage-library/manage-library';
import { AddRecordPage } from '../pages/add-record/add-record';
import { SearchPage } from '../pages/search/search';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { Auth } from '../providers/auth';

// Configs
const FirebaseConfig = {
  apiKey: 'AIzaSyAeB_Bjg4q27O6Lk2oEqBKTIM6ep-B5FBE',
  authDomain: 'vinylog-6e44f.firebaseapp.com',
  databaseURL: 'https://vinylog-6e44f.firebaseio.com',
  storageBucket: 'vinylog-6e44f.appspot.com',
}

const FirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

// Module
@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    ManageLibraryPage,
    AddRecordPage,
    SearchPage,
    ProfilePage,
    SettingsPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig, FirebaseAuthConfig)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    ManageLibraryPage,
    AddRecordPage,
    SearchPage,
    ProfilePage,
    SettingsPage
  ],
  providers: [Auth, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
