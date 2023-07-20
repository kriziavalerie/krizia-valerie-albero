import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-animal',
  templateUrl: 'animal.page.html',
  styleUrls: ['animal.page.scss'],
})
export class AnimalPage {
  constructor(private router: Router, private storage: Storage) {
    this.storage.create(); // Create the database
  }

  saveAnimals() {
    const animal = {
      name: (document.querySelector('ion-input[label="Name"] input') as HTMLInputElement)?.value,
      tagNumber: (document.querySelector('ion-input[label="Tag Number"] input') as HTMLInputElement)?.value,
      lostTurnedOverRescued: (document.querySelector('ion-input[label="Lost/Turned Over/Rescued"] input') as HTMLInputElement)?.value,
      estimatedAge: (document.querySelector('ion-input[label="Estimated Age"] input') as HTMLInputElement)?.value,
      animalStatus: (document.querySelector('ion-input[label="Animal Status"] input') as HTMLInputElement)?.value,
      currentWeight: (document.querySelector('ion-input[label="Current Weight"] input') as HTMLInputElement)?.value,
      dateOfBirth: (document.querySelector('ion-input[label="Date of Birth"] input') as HTMLInputElement)?.value,
      dateOfArrival: (document.querySelector('ion-input[label="Date of Arrival"] input') as HTMLInputElement)?.value,
      type: (document.querySelector('ion-input[label="Type"] input') as HTMLInputElement)?.value,
      coatType: (document.querySelector('ion-input[label="Coat Type"] input') as HTMLInputElement)?.value,
      primaryColor: (document.querySelector('ion-input[label="Primary Color"] input') as HTMLInputElement)?.value,
      secondaryColor: (document.querySelector('ion-input[label="Secondary Color"] input') as HTMLInputElement)?.value,
      breed: (document.querySelector('ion-input[label="Breed"] input') as HTMLInputElement)?.value,
      gender: (document.querySelector('ion-input[label="Gender"] input') as HTMLInputElement)?.value,
    };

    this.storage.get('animals').then((savedAnimals) => {
      const animals = savedAnimals ? savedAnimals : [];
      animals.push(animal);
      this.storage.set('animals', animals).then(() => {
        console.log('Animal saved successfully!');
        this.router.navigate(['/my-pets']);
      });
    });

    document.querySelectorAll('ion-input').forEach((input: any) => {
      input.value = '';
    });
  }
}
