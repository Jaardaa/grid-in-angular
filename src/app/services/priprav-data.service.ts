import { Injectable } from '@angular/core';
import { JednaLekce, NuevaAventuraU1, VsechnyLekce } from '../data/NuevaAventura1';


@Injectable({
  providedIn: 'root',
})
export class PripravDataService {

  constructor() {}

  data : VsechnyLekce[] = NuevaAventuraU1;

  pripravDataVsechLekci(): VsechnyLekce[] {
    return this.data;
  }

  pripravDataJedneLekce(n:number): JednaLekce {
    return this.data[n];
  }
}

