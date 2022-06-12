import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardServiceService } from '../card-service.service';
import { wrapGrid } from "animate-css-grid";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards = [];
  applyTransition: boolean = false;
  @ViewChild('grid', {static: false}) grid: ElementRef;
  constructor(private cardsService: CardServiceService) { }

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((cards)=>{
      if(cards && cards.length){
        console.log(cards)
        this.cards = cards.slice(0,25)
      }
    });

  }
  removeCard(index){
    wrapGrid(this.grid.nativeElement);
    this.cards.splice(index,1);
  }
  addCard(){
    wrapGrid(this.grid.nativeElement);
    let sampleTitle = 'Sample Title';
    let imgUrl = 'https://via.placeholder.com/600/61a65'
    this.cards.push({title:sampleTitle,url:imgUrl});
  }


}
