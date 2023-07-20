import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  // Function to handle the Log Out button click event
  logOut() {
    // Add any necessary log out logic here, such as clearing user session or tokens
    // Then navigate back to the home page
    this.router.navigate(['/home']);
  }

  // Other functions for handling different settings or navigation, if needed

}
