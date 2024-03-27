import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { MainContainerComponent } from './shared/main-container/main-container.component';
import { HomeComponent } from './pages/home/home.component';
import { PlantsComponent } from './pages/plants/plants.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainContainerComponent,
    HomeComponent,
    PlantsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
