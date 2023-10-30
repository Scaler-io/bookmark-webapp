import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/app.state';
import { ThemeEffect } from './state/theme/theme.effect';
import { NavbarModule } from './shared/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ThemeEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
