import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {
  newPet: any = {}; // Object to store the new pet data

  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit() {
    // Ensure that the database is created before using it
    await this.storage.create();
  }

  async savePet() {
    // Get the list of all pets
    let allPets: any[] = await this.storage.get('all') || [];
    allPets.push(this.newPet); // Add the new pet to the list

    // Save the updated list of all pets to Ionic Storage
    await this.storage.set('all', allPets);

    // Reset the new pet object
    this.newPet = {};

    // Navigate back to MyPetsPage and pass the newPet object
    this.router.navigate(['/my-pets'], { state: { newPet: this.newPet } });
  }
}
