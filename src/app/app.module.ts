import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsComponent } from './shared/components/components.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SlidersComponent } from './shared/components/sliders/sliders.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ServicesComponent } from './shared/components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentsComponent,
    HeaderComponent,
    SlidersComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
