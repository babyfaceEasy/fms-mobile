import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

//this is so i can change the landing page of the app
import { WelcomePage } from '../pages/welcome/welcome';
import { AllTicketsPage } from '../pages/all-tickets/all-tickets';
/*import { LoginPage } from '../pages/login/login';*/
import { TransmissionTicketPage } from '../pages/transmission-ticket/transmission-ticket';
import { BsnTicketPage } from '../pages/bsn-ticket/bsn-ticket';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Add User', component: ListPage },
      { title: 'All Tickets', component: AllTicketsPage },
      { title: 'Add Transmission Ticket', component: TransmissionTicketPage },
      { title: 'Add BSN Ticket', component: BsnTicketPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
