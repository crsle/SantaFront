import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [ 
  {path:'home', component:ConnexionComponent},
  {path:'login', component:ConnexionComponent},
  {path:'user', component:InscriptionComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
