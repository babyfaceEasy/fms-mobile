import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketUpdatesPage } from './ticket-updates';

@NgModule({
  declarations: [
    TicketUpdatesPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketUpdatesPage),
  ],
})
export class TicketUpdatesPageModule {}
