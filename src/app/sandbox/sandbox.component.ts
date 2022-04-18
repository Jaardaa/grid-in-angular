import { Component, OnInit } from '@angular/core';
import { NuevaAventuraU1 } from './NuevaAventura1';
import { simplifiedData } from './simplifiedData';
import { slovickaMock1 } from './simplifiedData';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showWord();
    this.showSlovicka()
  }

  NA_U1 = NuevaAventuraU1;
  SD = simplifiedData;
  SM = slovickaMock1;
  simplifiedSM = slovickaMock1[0];
  moreSimplifiedSM = slovickaMock1[0].slovicka

  showWord() {
    console.log(this.SD);
    console.log(this.SD.items);
    console.log(this.SD.items[0]);
    console.log(this.SD.items[0].id);
    console.log(this.SD.items[0].name);

  }

  showSlovicka() {
    console.log(this.SM);
    console.log(this.SM[0]);
    console.log(this.SM[0].nazev);
    console.log(this.SM[0].slovicka);
    console.log(this.SM[0].slovicka[0]);
    console.log(this.SM[0].slovicka[0].cj);
    console.log(this.SM[0].slovicka[0].sj);
    console.log(this.simplifiedSM.nazev);
    console.log(this.simplifiedSM.slovicka);
    console.log(this.simplifiedSM.slovicka[0].cj);
    console.log(this.moreSimplifiedSM);
    console.log(this.moreSimplifiedSM[1].cj);

  }
}
