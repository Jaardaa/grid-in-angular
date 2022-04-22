import { Component, OnInit } from '@angular/core';
import { PripravDataService } from '../services/priprav-data.service';
import { VsechnyLekce, JednaLekce } from '../data/NuevaAventura1';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sandbox3',
  templateUrl: './sandbox3.component.html',
  styleUrls: ['./sandbox3.component.css', '../app.component.css'],
})
export class Sandbox3Component implements OnInit {
  id!: string | null;
  z!: number;
  y!: number;
  onelesson!: JednaLekce;
  constructor(
    private pripravDataService: PripravDataService,
    private _Activatedroute: ActivatedRoute
  ) {}

  vsechnyLekce: VsechnyLekce[] =
  this.pripravDataService.pripravDataVsechLekci();


  jednaLekce: JednaLekce = this.pripravDataService.pripravDataJedneLekce(2);


  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    /* console.log(this.jednaLekce); */
    console.log(typeof (this.id)),
      this.z = Number(this.id);

    console.log(this.z);
    console.log(typeof (this.z))
    this.y = this.secti(this.z);
    console.log(this.y)
    this.onelesson = this.sezenLekci(this.z)
    console.log(this.onelesson)
    }
 secti(z: number):number{
   return z + 8;
  }
  sezenLekci(c: number): JednaLekce {
    return this.pripravDataService.pripravDataJedneLekce(c);

}

  counter: number = 0;
  zkouseneSlovo = this.jednaLekce.slovicka[0].sj;
  zkouseneSlovoPreklad = this.jednaLekce.slovicka[0].cj;
  prekladSlova = this.nextWord();
  showTranslation: boolean = false;
  buttonName: string = 'Show';
  posledniSlovo: boolean = false;
  correctAnswer: number = 0;
  maxLength = this.jednaLekce.slovicka.length;

  spravnaOdpoved(): number {
    return this.correctAnswer++;
  }

  showResult() {
    console.log(this.spravnaOdpoved());
  }

  nextWord(): void {
    this.maxLength = this.jednaLekce.slovicka.length;
    console.log('úPLNĚ Na začátku' + this.counter);
    if (this.counter == this.maxLength) {
      this.posledniSlovo = !this.posledniSlovo;
    } else {
      this.zkouseneSlovo = this.jednaLekce.slovicka[this.counter].sj;
      this.zkouseneSlovoPreklad = this.jednaLekce.slovicka[this.counter].cj;
      this.counter = this.counter + 1;
      console.log('Slovo číslo ' + this.counter);
      console.log(this.maxLength);
    }

    const showTranslation = (this.showTranslation = true);
    this.toggle();
  }

  previousWord() {
    if (this.counter > 1) {
      this.counter = this.counter - 1;
      this.zkouseneSlovo = this.jednaLekce.slovicka[this.counter - 1].sj;
      this.zkouseneSlovoPreklad = this.jednaLekce.slovicka[this.counter - 1].cj;
    } else {
      alert('First word!');
    }
    const showTranslation = (this.showTranslation = true);
    this.toggle();
  }

  toggle(): void {
    this.showTranslation = !this.showTranslation;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.showTranslation) this.buttonName = 'Hide';
    else this.buttonName = 'Show';
  }

  anotherRound(): void {
    this.posledniSlovo = !this.posledniSlovo;
    this.correctAnswer = 0;
    this.counter = 0;
    this.nextWord();
  }
}
