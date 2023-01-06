import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModTwoComponent } from './test-mod-two.component';

describe('TestModTwoComponent', () => {
  let component: TestModTwoComponent;
  let fixture: ComponentFixture<TestModTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestModTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
