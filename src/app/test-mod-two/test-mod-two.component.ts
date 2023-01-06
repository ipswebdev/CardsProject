import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-mod-two',
  templateUrl: './test-mod-two.component.html',
  styleUrls: ['./test-mod-two.component.scss']
})
export class TestModTwoComponent implements OnInit {

  constructor() { }
  name: string = '';
  ngOnInit(): void {
    console.log('TestModComponent2 init');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('TestModComponent2 destroy');
  }

}
