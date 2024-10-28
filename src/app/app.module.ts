import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import { AddvoyageComponent } from './addvoyage/addvoyage.component';
import { ListvoyageComponent } from './listvoyage/listvoyage.component';
@NgModule({
  declarations: [AppComponent, AddvoyageComponent, ListvoyageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
