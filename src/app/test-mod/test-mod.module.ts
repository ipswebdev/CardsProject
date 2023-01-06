import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModComponent } from './test-mod.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TestModComponent,
    // data: {shouldReuse: true}
   },
  // {
  //  path: '**',
  //  component: TestModComponent,
  // //  data: {shouldReuse: true}
  // },
];

@NgModule({
  declarations: [TestModComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TestModModule { }
