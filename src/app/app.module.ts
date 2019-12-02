import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { InscriptionComponent } from './inscription/inscription.component';
=======
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 48cd40f5b7057a193e6ff7d2afb89891ca2571bd

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    InscriptionComponent
=======
    ConnexionComponent,
>>>>>>> 48cd40f5b7057a193e6ff7d2afb89891ca2571bd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
