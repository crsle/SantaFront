import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { SantaComponent } from './santa/santa.component';
import { MurComponent } from './mur/mur.component';
import { HistoriqueComponent } from './historique/historique.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [ 
  {path:'about', component:AboutComponent},
  {path:'mur', component:MurComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:ConnexionComponent},
  {path:'user', component:InscriptionComponent},
  {path:'santa', component:SantaComponent},
  {path:'historique', component:HistoriqueComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
