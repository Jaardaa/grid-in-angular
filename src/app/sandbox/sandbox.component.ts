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

  }

  NA_U1 = NuevaAventuraU1;
  SD = simplifiedData;
  SM = slovickaMock1;
  simplifiedSM = slovickaMock1[0];
  moreSimplifiedSM = slovickaMock1[0].slovicka

}
