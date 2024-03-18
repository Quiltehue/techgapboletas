import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngreboletaPage } from './ingreboleta.page';

const routes: Routes = [
  {
    path: '',
    component: IngreboletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngreboletaPageRoutingModule {}
