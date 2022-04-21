import { Component, OnInit } from '@angular/core';
import { VsechnyLekce, JednaLekce } from '../data/NuevaAventura1';
import { PripravDataService } from '../services/priprav-data.service';

@Component({
  selector: 'app-sandbox2',
  templateUrl: './sandbox2.component.html',
  styleUrls: ['./sandbox2.component.css'],
})
export class Sandbox2Component implements OnInit {
  vsechnyLekce: VsechnyLekce[] = this.pripravDataService.pripravDataVsechLekci();
  jednaLekce: JednaLekce = this.pripravDataService.pripravDataJedneLekce(1);

  constructor(private pripravDataService: PripravDataService) {}

  ngOnInit(): void {
/*     this.vsechnyLekce = this.pripravDataService.pripravDataVsechLekci();
    console.log(this.vsechnyLekce[0]);
    console.log(this.vsechnyLekce[0].id);
    console.log(this.vsechnyLekce[0].nazev);
    console.log(this.vsechnyLekce[0].slovicka);
    console.log(this.vsechnyLekce[0].slovicka[0]);
    console.log(this.vsechnyLekce[0].slovicka[0].cj);

    const onelesson = this.vsechnyLekce[0];
    console.log(onelesson.slovicka[0].sj);
    console.log(onelesson.slovicka[1].sj);
    console.log(onelesson.slovicka[2].sj);

    console.log(this.pripravDataService.pripravDataVsechLekci());*/
    console.log(this.jednaLekce.slovicka[0]);
  }
}
