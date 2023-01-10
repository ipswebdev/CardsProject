import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { TestModTwoComponent } from './test-mod-two/test-mod-two.component';
import { TestModComponent } from './test-mod/test-mod.component';

const routes: Routes = [
  {
    path: 'test-mod',
    loadChildren: () => import('./test-mod/test-mod.module').then(m => m.TestModModule),
    data: {
      parentPath: 'test-mod'
    }
   },
   {
    path: 'test-mod-two',
    loadChildren: () => import('./test-mod-two/test-mod-two.module').then(m => m.TestModTwoModule),
    data: {
      parentPath: 'test-mod-two'
    }
   },
   {
    path: '',
    pathMatch: 'full',
    component: EmptyStateComponent
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
