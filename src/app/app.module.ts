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
<<<<<<< HEAD
>>>>>>> 48cd40f5b7057a193e6ff7d2afb89891ca2571bd
=======
import { HomeComponent } from './home/home.component';
>>>>>>> d347b7cbbcb12f35632c1b4c414c31899ef613dc

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    InscriptionComponent
=======
    ConnexionComponent,
<<<<<<< HEAD
>>>>>>> 48cd40f5b7057a193e6ff7d2afb89891ca2571bd
=======
    HomeComponent,
>>>>>>> d347b7cbbcb12f35632c1b4c414c31899ef613dc
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
export class AppModule {}
