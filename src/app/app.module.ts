import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { CustomRouteReuseStrategy } from './customRouteReuse.service';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmptyStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule
  ],
  providers: [{provide: RouteReuseStrategy,useClass:CustomRouteReuseStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
