import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add this line

import { MyPetsPageRoutingModule } from './my-pets-routing.module';
import { MyPetsPage } from './my-pets.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule, // Add this line
    ReactiveFormsModule, // Add this line
    MyPetsPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [MyPetsPage]
})
export class MyPetsPageModule {}
