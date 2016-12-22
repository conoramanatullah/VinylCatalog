import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LibraryPage } from '../pages/library/library';
import { ManageLibraryPage } from '../pages/manage-library/manage-library';
import { AddRecordPage } from '../pages/add-record/add-record';


@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    ManageLibraryPage,
    AddRecordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    ManageLibraryPage,
    AddRecordPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
