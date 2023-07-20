import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-pets',
  templateUrl: 'my-pets.page.html',
  styleUrls: ['my-pets.page.scss'],
})
export class MyPetsPage {
  categoryForm: FormGroup;
  selectedCategory: string = 'cat';
  animals: any[] = [];

  constructor(
    private router: Router,
    private storage: Storage,
    private formBuilder: FormBuilder
  ) {
    this.categoryForm = this.formBuilder.group({
      selectedCategory: ['cat']
    });
    this.storage.create(); // Create the database if it doesn't exist
  }

  ngOnInit() {
    // Load the default category (cat)
    this.loadAnimals('cat');
  }

  ionViewWillEnter() {
    // This will be triggered every time the page is entered or navigated back to
    this.loadAnimals(this.selectedCategory);
  }

  loadAnimals(category: string) {
    this.selectedCategory = category;
    this.storage.get('animals').then((savedAnimals: any[]) => {
      if (savedAnimals && savedAnimals.length > 0) {
        if (category === 'cat') {
          this.animals = savedAnimals.filter((animal) => animal.selectedCategory === 'cat');
        } else if (category === 'dog') {
          this.animals = savedAnimals.filter((animal) => animal.selectedCategory === 'dog');
        }
      } else {
        // Initialize the array when there are no saved animals
        this.animals = [];
      }
    });
  }

  showPetDetails(animal: any) {
    // Navigate to the pet details page with the animal ID
    this.router.navigateByUrl(`/animal/${animal.id}`);
  }

  buttonClicked(category: string) {
    // Add your desired functionality here when the button is clicked
    console.log('Button clicked');

    // Example: Navigate to the AnimalPage
    this.router.navigateByUrl('/animal');
  }

  categoryChanged() {
    this.loadAnimals(this.categoryForm.value.selectedCategory);
  }
}
