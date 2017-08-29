import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllTicketsPage } from './all-tickets';

@NgModule({
  declarations: [
    AllTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllTicketsPage),
  ],
})
export class AllTicketsPageModule {}
