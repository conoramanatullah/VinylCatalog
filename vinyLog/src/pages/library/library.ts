import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManageLibraryPage } from '../manage-library/manage-library';
import { AddRecordPage } from '../add-record/add-record';
import { SearchPage } from '../search/search';
import { Auth } from '../../providers/auth';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {

  manageLibrary = ManageLibraryPage;
  addRecord = AddRecordPage;
  search = SearchPage;
  appname = 'vinyLog';

  public myuser = {
    'email': 'conor.amanatullah@gmail.com',
    'password': 'Fancy5501!'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private _auth: Auth) {


    this._auth.signIn(this.myuser);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Library Page Loaded');
  }





}
