import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';


import {ProfilePage} from "../pages/profile/profile";
import {NewStreamPage} from "../pages/new-stream/new-stream";
import {SearchPage} from "../pages/search/search";
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {RestPasswordPage} from "../pages/rest-password/rest-password";
import {NextConfirmPage} from "../pages/next-confirm/next-confirm";
import {StartPage} from "../pages/start/start";
import {RegistrationPage} from "../pages/registration/registration";
import {NextRegistrationPage} from "../pages/next-registration/next-registration";
import {SettingsPage} from "../pages/settings/settings";
import {AlertSettingsPage} from "../pages/alert-settings/alert-settings";
import {AccauntSettingsPage} from "../pages/accaunt-settings/accaunt-settings";
import {MainSettingsPage} from "../pages/main-settings/main-settings";
import {ChangePasswordPage} from "../pages/change-password/change-password";
import {EditPage} from "../pages/edit/edit";
import {CommentsPage} from "../pages/comments/comments";
import {ShowUserPage} from "../pages/show-user/show-user";
import {FindyourselfPage} from "../pages/findyourself/findyourself";
import {ThemesPage} from "../pages/themes/themes";
import {StatusWinPage} from "../pages/status-win/status-win";
import {StatusWaitPage} from "../pages/status-wait/status-wait";
import {StatusLosePage} from "../pages/status-lose/status-lose";
import {AuctionPage} from "../pages/auction/auction";
import {AuctionprofilePage} from "../pages/auctionprofile/auctionprofile";
import {ReviewsPage} from "../pages/reviews/reviews";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";

import {ReaderProvider} from '../providers/reader/reader';
import {SearchPipe} from "../pipes/search/search";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ProfilePage,
    NewStreamPage,
    SearchPage,
    LoginPage,
    RestPasswordPage,
    NextConfirmPage,
    StartPage,
    RegistrationPage,
    NextRegistrationPage,
    SearchPipe,
    EditPage,
    CommentsPage,
    ShowUserPage,
    SettingsPage,
    AccauntSettingsPage,
    MainSettingsPage,
    AlertSettingsPage,
    ChangePasswordPage,
    FindyourselfPage,
    ThemesPage,
    StatusWinPage,
    StatusWaitPage,
    StatusLosePage,
    AuctionPage,
    AuctionprofilePage,
    ReviewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ProfilePage,
    NewStreamPage,
    SearchPage,
    LoginPage,
    RestPasswordPage,
    NextConfirmPage,
    StartPage,
    RegistrationPage,
    NextRegistrationPage,
    EditPage,
    CommentsPage,
    ShowUserPage,
    SettingsPage,
    AccauntSettingsPage,
    MainSettingsPage,
    AlertSettingsPage,
    ChangePasswordPage,
    FindyourselfPage,
    ThemesPage,
    StatusWinPage,
    StatusWaitPage,
    StatusLosePage,
    AuctionPage,
    AuctionprofilePage,
    ReviewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReaderProvider
  ]
})
export class AppModule {
}
