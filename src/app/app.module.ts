import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import { AddvoyageComponent } from './addvoyage/addvoyage.component';
import { ListvoyageComponent } from './listvoyage/listvoyage.component';
import { DetailsVoyageComponent } from './details-voyage/details-voyage.component';
@NgModule({
  declarations: [AppComponent, AddvoyageComponent, ListvoyageComponent, DetailsVoyageComponent],
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
