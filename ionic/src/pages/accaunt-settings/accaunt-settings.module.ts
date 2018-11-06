import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccauntSettingsPage } from './accaunt-settings';

@NgModule({
  declarations: [
    AccauntSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccauntSettingsPage),
  ],
})
export class AccauntSettingsPageModule {}
