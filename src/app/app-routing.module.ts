import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { SantaComponent } from './santa/santa.component';
import { MurComponent } from './mur/mur.component';



const routes: Routes = [ 
  {path:'mur', component:MurComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:ConnexionComponent},
  {path:'user', component:InscriptionComponent},
  {path:'santa', component:SantaComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
