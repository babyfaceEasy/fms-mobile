import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";

import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';
import { AllTicketsPage } from '../pages/all-tickets/all-tickets';
import { TransmissionTicketPage } from '../pages/transmission-ticket/transmission-ticket';
import { BsnTicketPage } from '../pages/bsn-ticket/bsn-ticket';
import { IpntwkTicketPage } from '../pages/ipntwk-ticket/ipntwk-ticket';
import { ChgePwdPage } from '../pages/chge-pwd/chge-pwd';
import { LoginPage } from '../pages/login/login';
import { ReportsPage } from '../pages/reports/reports';
import { TicketUpdatesPage } from '../pages/ticket-updates/ticket-updates';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    AllTicketsPage,
    TransmissionTicketPage,
    BsnTicketPage,
    IpntwkTicketPage,
    ChgePwdPage,
    ReportsPage,
    TicketUpdatesPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    AllTicketsPage,
    TransmissionTicketPage,
    BsnTicketPage,
    IpntwkTicketPage,
    ChgePwdPage,
    ReportsPage,
    TicketUpdatesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
