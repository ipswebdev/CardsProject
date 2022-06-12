import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';
import { CardServiceService } from '../card-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CardsComponent, CardComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CardsComponent, CardComponent]
})
export class CardsModule { }
