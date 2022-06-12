import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/cards',
    pathMatch: 'full'
  },
 {
   path: 'cards',
   loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)
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
