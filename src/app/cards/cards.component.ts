import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { config } from 'rxjs';
import { Card } from '../models/card';
import { CardService } from '../services/card.service';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards!:Card[]

  // cardItem={
  //   title:"Frontend Developer",
  //   name:"Özcan ÇETİN",
  //   phone:"0555 555 55 55",
  //   email:"cetin445@gmail.com",
  //   adress:"İstanbul"
  // }

  constructor(
    public dialog: MatDialog,
    private cardService:CardService
  ) { }

  ngOnInit(): void {
    this.getCards()
  }

  openAddCardModal(){
    this.dialog.open(CardModalComponent    
    )
  }

  getCards():void{
    this.cardService.getCards().subscribe(
      ((res:Card[])=>{
        console.log(res)
        this.cards=res
        console.log(this.cards)
      })
    )
  }

}
