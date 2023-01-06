import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModTwoComponent } from './test-mod-two.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TestModTwoComponent,
    data: {shouldReuse: true}
   },
  // {
  //  path: '**',
  //  component: TestModTwoComponent,
  //  data: {shouldReuse: true}
  // },
];

@NgModule({
  declarations: [TestModTwoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TestModTwoModule { }
