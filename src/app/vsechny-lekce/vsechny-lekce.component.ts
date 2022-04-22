import { Component, OnInit } from '@angular/core';
import { NuevaAventuraU1 } from '../data/NuevaAventura1';
import { PripravDataService } from '../services/priprav-data.service';
import { VsechnyLekce, JednaLekce } from '../data/NuevaAventura1';


@Component({
  selector: 'app-vsechny-lekce',
  templateUrl: './vsechny-lekce.component.html',
  styleUrls: ['./vsechny-lekce.component.css'],
})
export class VsechnyLekceComponent implements OnInit {


  constructor(
    private pripravDataService: PripravDataService,

  ) {}


  ngOnInit(): void {

  }

  jednaLekce: JednaLekce = this.pripravDataService.pripravDataJedneLekce(2);
  vsechnyLekce: VsechnyLekce[] =
  this.pripravDataService.pripravDataVsechLekci();

}
