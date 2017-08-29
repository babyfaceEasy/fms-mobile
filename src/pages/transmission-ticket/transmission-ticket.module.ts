import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransmissionTicketPage } from './transmission-ticket';

@NgModule({
  declarations: [
    TransmissionTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(TransmissionTicketPage),
  ],
})
export class TransmissionTicketPageModule {}
