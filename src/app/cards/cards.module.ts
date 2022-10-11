import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';
import { CardServiceService } from '../card-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CountClicks } from './button-directive.ts/btn.directive';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent
  }
];

@NgModule({
  declarations: [CardsComponent, CardComponent,CountClicks],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [CardsComponent, CardComponent,CountClicks]
})
export class CardsModule { }
