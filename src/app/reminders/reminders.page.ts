import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reminders',
  templateUrl: 'reminders.page.html',
  styleUrls: ['reminders.page.scss'],
})
export class RemindersPage {
  selectedCategory: string = 'today';
  showForm: boolean = false;
  reminder: any = {};
  reminders: any[] = [
    // Your initial reminder data will go here...
  ];
  selectedReminder: any;
  selectedDateTime: string = ''; // Initialize the selectedDateTime property

  constructor(private alertController: AlertController) {}

  getFilteredReminders(category: string) {
    // Filter reminders based on the selected category
    if (category === 'all') {
      return this.reminders;
    } else {
      return this.reminders.filter((reminder) => reminder.category === category);
    }
  }

  showReminderForm() {
    this.showForm = true;
  }

  clearReminderForm() {
    this.reminder = {};
    this.showForm = false;
  }

  onSave() {
    if (this.reminder.title && this.selectedDateTime) {
      // Split selectedDateTime into date and time
      const [date, time] = this.selectedDateTime.split(' ');

      // Assign date and time to reminder
      this.reminder.date = date;
      this.reminder.time = time;

      this.reminders.push(this.reminder);
      this.clearReminderForm();
    } else {
      this.presentAlert('Error', 'Please fill in all the required fields.');
    }
  }

  async showReminderDetails(reminder: any) {
    this.selectedReminder = reminder;
    this.selectedDateTime = reminder.date + ' ' + reminder.time; // Store the selected date and time
  }

  // Method to handle date selection cancellation
  onDateSelectionCanceled() {
    this.selectedDateTime = this.selectedReminder.date + ' ' + this.selectedReminder.time; // Restore the previous date and time value
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
