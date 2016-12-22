import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManageLibraryPage } from '../manage-library/manage-library';
import { AddRecordPage } from '../add-record/add-record';


@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {
  manageLibrary = ManageLibraryPage;
  addRecord = AddRecordPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('Library Page Loaded');
  }


}
