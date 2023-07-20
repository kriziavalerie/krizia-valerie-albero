import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterReminders',
})
export class FilterRemindersPipe implements PipeTransform {
  transform(reminders: any[], category: string): any[] {
    if (!category || category === 'All') {
      return reminders;
    }

    return reminders.filter((reminder) => reminder.category === category);
  }
}
