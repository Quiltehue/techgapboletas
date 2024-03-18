import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngreboletaPageRoutingModule } from './ingreboleta-routing.module';

import { IngreboletaPage } from './ingreboleta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngreboletaPageRoutingModule
  ],
  declarations: [IngreboletaPage]
})
export class IngreboletaPageModule {}
