import { Component, OnInit } from '@angular/core';
import { Souhait } from '../model/Souhait';
import { MybackService } from '../myback.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PopupcreationsouhaitComponent } from '../popupcreationsouhait/popupcreationsouhait.component';
import { PopupsouhaitComponent } from '../popupsouhait/popupsouhait.component';

@Component({
  selector: 'app-listesouhait',
  templateUrl: './listesouhait.component.html',
  styleUrls: ['./listesouhait.component.css']
})
export class ListesouhaitComponent implements OnInit {
  souhaits;
  souhaitInitial = new Souhait();
  souhaitArrive = new Souhait();
  ordreAChanger: number;
  nouvelOrdre: number;
  ancienOrdre: number;
  ordre;
  souhaitbis;

  constructor(public myback: MybackService, private route: Router, private http: HttpClient, private dialog: MatDialog) {
    if (myback.user.mail == null) {
      this.myback.msgErr = 'Vous devez vous connectez';
      this.route.navigate(['login']);
    }
  }

  ngOnInit() {
    this.http.get(this.myback.lienHTTP + 'user/santa/souhaits/' + this.myback.user.id + '/' + this.myback.santa.id)
      .subscribe(data => {
        this.souhaits = data;
      }, err => {
        console.log(err);

      });
  }

  recupSouhaits() {
    this.http.get(this.myback.lienHTTP + 'user/santa/souhaits/' + this.myback.user.id + '/' + this.myback.santa.id)
      .subscribe(data => {
        this.souhaits = data;
        console.log('souhaits', this.souhaits);
      }, err => {
        console.log(err);

      });
  }

  

  supprSouhait(s) {
    this.http.delete(this.myback.lienHTTP + 'souhait/' + s.id)
      .subscribe(data => {
        console.log('suppression souhait : ', data)
        this.ngOnInit();
      }, err => {
        console.log(err);
      });
  }

  openPopupCreaSouhait() {
    const mydial = this.dialog.open(PopupcreationsouhaitComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }

  // monterSouhait(s: Souhait) {

  //   this.souhaitInitial = s;
  //   this.ancienOrdre = this.souhaitInitial.ordre;
  //   this.nouvelOrdre = this.souhaitInitial.ordre - 1;

  //   if (this.ancienOrdre >= 2) {

      
  //     this.http.get(this.myback.lienHTTP + 'souhait/' + this.myback.user.id + '/' + this.myback.santa.id + '/' + this.nouvelOrdre)
  //       .subscribe(data => {
  //         if (data != null) {
  //           this.souhaitbis = data
  //           this.souhaitArrive = this.souhaitbis;
  //           this.souhaitArrive.ordre = this.ancienOrdre;
  //           this.http.post(this.myback.lienHTTP + 'souhait', this.souhaitArrive)
  //             .subscribe(data2 => {
  //               console.log('Le souhait à la place choisie a été déplacé')
  //             }, err2 => {
  //               console.log(err2);
  //             });
  //         }
  //       }, err => {
  //         console.log(err);
  //       });
  //     console.log('souhait quon a changé juste avznt envoie en bdd :', this.souhaitInitial);
  //     this.souhaitInitial.ordre = this.nouvelOrdre;
  //     this.http.post(this.myback.lienHTTP + 'souhait', this.souhaitInitial)
  //       .subscribe(data => {

  //         console.log('Le souhait a bien été monté')
  //         console.log('Le souhait a bien été baissé')
  //         setTimeout(() => { 
  //           this.ngOnInit();
  //         }, 100);
  //       }, err => {
  //         console.log(err);
  //       })
  //   }
  // }
  
  // baisserSouhait(s: Souhait) {

  //   this.souhaitInitial = s;
  //   this.ancienOrdre = this.souhaitInitial.ordre;
  //   this.nouvelOrdre = this.souhaitInitial.ordre + 1;

    

      
  //     this.http.get(this.myback.lienHTTP + 'souhait/' + this.myback.user.id + '/' + this.myback.santa.id + '/' + this.nouvelOrdre)
  //       .subscribe(data => {
  //         if (data != null) {
  //           this.souhaitbis = data
  //           this.souhaitArrive = this.souhaitbis;
  //           this.souhaitArrive.ordre = this.ancienOrdre;
  //           this.http.post(this.myback.lienHTTP + 'souhait', this.souhaitArrive)
  //             .subscribe(data2 => {
  //               console.log('Le souhait à la place choisie a été déplacé')
  //             }, err2 => {
  //               console.log(err2);
  //             });
  //         }
  //       }, err => {
  //         console.log(err);
  //       });
  //     console.log('souhait quon a changé juste avznt envoie en bdd :', this.souhaitInitial);
  //     this.souhaitInitial.ordre = this.nouvelOrdre;
  //     this.http.post(this.myback.lienHTTP + 'souhait', this.souhaitInitial)
  //       .subscribe(data => {

  //         console.log('Le souhait a bien été baissé')
  //         setTimeout(() => { 
  //           this.ngOnInit();
  //         }, 100);
          
  //       }, err => {
  //         console.log(err);
  //       })
    
  // }





  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.souhaits, event.previousIndex, event.currentIndex);

    this.ancienOrdre = event.previousIndex + 1;
    this.nouvelOrdre = event.currentIndex + 1;

    if (this.ancienOrdre > this.nouvelOrdre) {
        this.modifierOrdreMontant(this.ancienOrdre,this.nouvelOrdre);
    } else {
        this.modifierOrdreDescendant(this.ancienOrdre,this.nouvelOrdre);
    }
    setTimeout(() => { 
      this.ngOnInit();
    }, 100);
    
  }

  modifierOrdreMontant(ancienOrdre:number, nouvelOrdre:number){
    this.recupSouhaitEtModifOrdre(ancienOrdre, nouvelOrdre);
    for (let i = nouvelOrdre; i < ancienOrdre; i++) {
      this.recupSouhaitEtModifOrdre(i,i+1);
    }
  }

  modifierOrdreDescendant(ancienOrdre:number, nouvelOrdre:number){
    this.recupSouhaitEtModifOrdre(ancienOrdre, nouvelOrdre);
    for (let i = nouvelOrdre; i > ancienOrdre; i--) {
      this.recupSouhaitEtModifOrdre(i,i-1);
    }
  }

  recupSouhaitEtModifOrdre(ancienOrdre:number, nouvelOrdre:number){
    this.http.get(this.myback.lienHTTP + 'souhait/' + this.myback.user.id + '/' + this.myback.santa.id + '/' + ancienOrdre)
      .subscribe(data => {
        this.souhaitbis = data;
        this.souhaitArrive = this.souhaitbis;
        this.souhaitArrive.ordre = nouvelOrdre;

        this.http.post(this.myback.lienHTTP + 'souhait', this.souhaitArrive)
          .subscribe(data2 => {

          }, err2 => {
            console.log(err2);
          });

      }, err => {
        console.log(err);
      });
  }



}
