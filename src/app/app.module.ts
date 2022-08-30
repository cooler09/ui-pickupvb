import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { ThemePickerModule } from './shared/theme-picker';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatToolbarModule,
    ThemePickerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
