import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/shared/services/detail.service';

@Component({
  selector: 'blog-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input("boissons") detail! : any | null;
  event:boolean=false
  isChecked:boolean = false;
  constructor() { }

  ngOnInit(): void {    
        // console.log(this.detail.produit.boissons);        
    this.recupBoisson(this.detail.produit.boissons)    
  }
  sommeTaille:number =0;
  inputChecked(e:any){    
    if (e.target.checked) {
      // alert('dzkm')
      this.sommeTaille ++;
    }else{
      this.sommeTaille --;
    }
    console.log(this.sommeTaille);
    
    return this.sommeTaille;
  }
  recupBoisson(taille:any []){
    taille.forEach(elt=>{
      this.tabTaille.push({ quantiteTailleMenu:elt.quantite, quantiteChoisie:0 })
    })
  }

  tabTaille :{quantiteTailleMenu: number, quantiteChoisie:number}[]=[]

  plus(indice:number){
    if (this.tabTaille[indice].quantiteTailleMenu == this.tabTaille[indice].quantiteChoisie) {
      alert('jbn')
      return;
    }
    this.tabTaille[indice].quantiteChoisie++;
    this.inputValue(this.tabTaille[indice])
    console.log(this.inputValue(this.tabTaille[indice]));
    
  }

  inputValue(elt:{quantiteTailleMenu:number,quantiteChoisie:number}):boolean{
    if (elt.quantiteTailleMenu <= elt.quantiteChoisie) {
      // console.log(elt)
      return true;
    }
    return false;
  }
}
