import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertSettingsPage } from './alert-settings';

@NgModule({
  declarations: [
    AlertSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertSettingsPage),
  ],
})
export class AlertSettingsPageModule {}
