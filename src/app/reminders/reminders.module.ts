import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RemindersPageRoutingModule } from './reminders-routing.module';
import { RemindersPage } from './reminders.page';
import { FilterRemindersPipe } from './filter-reminders.pipe'; // Import the pipe here

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemindersPageRoutingModule,
  ],
  declarations: [RemindersPage, FilterRemindersPipe], // Add the pipe to the declarations array
})
export class RemindersPageModule {}
