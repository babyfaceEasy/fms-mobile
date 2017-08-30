import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BsnTicketPage } from './bsn-ticket';

@NgModule({
  declarations: [
    BsnTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(BsnTicketPage),
  ],
})
export class BsnTicketPageModule {}
