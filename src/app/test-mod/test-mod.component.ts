import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-mod',
  templateUrl: './test-mod.component.html',
  styleUrls: ['./test-mod.component.scss']
})
export class TestModComponent implements OnInit, OnDestroy {

  constructor() { }
  name : string = '';
  ngOnInit(): void {
    console.log('TestModComponent init');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('TestModComponent destroy');
  }

}
