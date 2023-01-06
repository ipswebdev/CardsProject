import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { TestModTwoComponent } from './test-mod-two/test-mod-two.component';
import { TestModComponent } from './test-mod/test-mod.component';

const routes: Routes = [
  // {
  //  path: 'cards',
  // //  loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule),
  //  component : TestModComponent
  // },
  {
    path: 'test-mod/:id',
    loadChildren: () => import('./test-mod/test-mod.module').then(m => m.TestModModule)
    // component: TestModTwoComponent
   },
   {
    path: 'test-mod-two/:num',
    loadChildren: () => import('./test-mod-two/test-mod-two.module').then(m => m.TestModTwoModule)
   },
  {
    path:'**',
    component: EmptyStateComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
