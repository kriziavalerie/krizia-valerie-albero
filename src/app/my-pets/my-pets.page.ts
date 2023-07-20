import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.page.html',
  styleUrls: ['./my-pets.page.scss'],
})
export class MyPetsPage implements OnInit {
  selectedCategory: string = 'all'; // Default category selection
  pets: any[] = [];

  constructor(private storage: Storage) {
    this.storage.create(); // Create the database
  }

  async ngOnInit() {
    // Ensure that the database is created before using it
    await this.storage.create();

    // Fetch all pets initially when the component loads
    this.fetchAllPets();
  }

  async fetchAllPets() {
    // Fetch all pets from storage
    this.pets = await this.storage.get('all') || [];
  }

  async fetchPetsByCategory(category: string) {
    // Fetch pets for the selected category
    this.pets = await this.storage.get(category) || [];
  }

  categoryChanged() {
    // Fetch pets for the newly selected category
    if (this.selectedCategory === 'all') {
      this.fetchAllPets();
    } else {
      this.fetchPetsByCategory(this.selectedCategory);
    }
  }
}
