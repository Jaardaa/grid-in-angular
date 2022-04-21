import { Component, OnInit } from '@angular/core';
import { PripravDataService } from '../services/priprav-data.service';
import { VsechnyLekce, JednaLekce } from '../data/NuevaAventura1';

@Component({
  selector: 'app-sandbox3',
  templateUrl: './sandbox3.component.html',
  styleUrls: ['./sandbox3.component.css', '../app.component.css'],
})
export class Sandbox3Component implements OnInit {
  constructor(private pripravDataService: PripravDataService) {}

  vsechnyLekce: VsechnyLekce[] =
    this.pripravDataService.pripravDataVsechLekci();
  jednaLekce: JednaLekce = this.pripravDataService.pripravDataJedneLekce(3);

  ngOnInit(): void {}

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
