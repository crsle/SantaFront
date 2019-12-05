import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupCreaSantaComponent } from './popup-crea-santa/popup-crea-santa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SantaComponent } from './santa/santa.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { PopupsouhaitComponent } from './popupsouhait/popupsouhait.component';
import { PopupInvitationComponent } from './popup-invitation/popup-invitation.component';
import { PopupcreationsouhaitComponent } from './popupcreationsouhait/popupcreationsouhait.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ListeparticipantComponent } from './listeparticipant/listeparticipant.component';
import { ListesouhaitComponent } from './listesouhait/listesouhait.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    HomeComponent,
    PopupCreaSantaComponent,
    SantaComponent,
    PopupsouhaitComponent,
    PopupInvitationComponent,
    PopupcreationsouhaitComponent,
    ListeparticipantComponent,
    ListesouhaitComponent
  ],
  
  entryComponents: [PopupCreaSantaComponent,PopupsouhaitComponent,PopupcreationsouhaitComponent, PopupInvitationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule, 
    MatTabsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
