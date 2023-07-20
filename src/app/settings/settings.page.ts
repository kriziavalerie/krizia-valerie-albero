import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {

  constructor(private navCtrl: NavController) {}

  goToPersonalDetailsPage() {
    // Navigate to the Personal Details page
    this.navCtrl.navigateForward('/personal-details');
  }

  goToPasswordSecurityPage() {
    // Navigate to the Password & Security page
    this.navCtrl.navigateForward('/password-security');
  }

  goToTextSettingsPage() {
    // Navigate to the Text Settings page
    this.navCtrl.navigateForward('/text-settings');
  }

  doSomething() {
    // Handle the click event for the first notification item
    console.log('Clicked on Notification Item 1');
  }

  doSomethingElse() {
    // Handle the click event for the second notification item
    console.log('Clicked on Notification Item 2');
  }

}
