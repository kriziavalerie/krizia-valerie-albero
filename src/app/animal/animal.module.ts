import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { IonicModule } from '@ionic/angular';
import { AnimalPageRoutingModule } from './animal-routing.module';
import { AnimalPage } from './animal.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // Add this line
    AnimalPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [AnimalPage]
})
export class AnimalPageModule {}
