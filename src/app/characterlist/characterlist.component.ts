import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../Character.service';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css'],
 
})
export class CharacterlistComponent implements OnInit {
  compAvengers: any[];
  chosenAvenger: String = 'avengers';

  constructor(private _avengerService: CharacterService) { }

  ngOnInit(): void {
    this._avengerService.getavengers().subscribe(avglist => this.compAvengers = avglist);   
  }
    onIron(): void{
      this.chosenAvenger = 'Iron man';
     
    }
    onCap(): void{
      this.chosenAvenger = 'Captain America';
     
    }
    onThor(): void{
      this.chosenAvenger = 'Thor';
     
    }

    onbw(): void{
      this.chosenAvenger = 'Black Widow';
     
    }

    onhulk(): void{
      this.chosenAvenger = 'Hulk';
     
    }
    onds(): void{
      this.chosenAvenger = 'Doctor Strange';
     
    }

}
