import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card;
  @Input() index;
  @Output() removeCard = new EventEmitter; 
  constructor() { }

  ngOnInit(): void {
  }

  removeCardHandler(index){
    this.removeCard.emit(index);
  }

}
