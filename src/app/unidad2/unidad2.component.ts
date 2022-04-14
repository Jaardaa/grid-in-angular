import { Component, OnInit } from '@angular/core';
import { NuevaAventuraU2 } from './NuevaAventuraU2';

@Component({
  selector: 'app-unidad2',
  templateUrl: './unidad2.component.html',
  styleUrls: ['./unidad2.component.css', '../app.component.css'],
})
export class Unidad2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'grid-in-angular';
  NA_U2 = NuevaAventuraU2;

  counter: number = 0;
  zkouseneSlovo = this.NA_U2[this.counter].sj;
  zkouseneSlovoPreklad = this.NA_U2[this.counter].cj;
  prekladSlova = this.nextWord();
  showTranslation: boolean = false;
  buttonName: string = 'Show';
  posledniSlovo: boolean = false;
  correctAnswer: number = 0;
  maxLength = this.NA_U2.length;

  spravnaOdpoved(): number {
    return this.correctAnswer++;
  }

  showResult() {
    console.log(this.spravnaOdpoved());
  }

  nextWord(): void {
    this.maxLength = this.NA_U2.length;
    console.log('úPLNĚ Na začátku' + this.counter);
    if (this.counter == this.maxLength) {
      this.posledniSlovo = !this.posledniSlovo;
    } else {
      this.zkouseneSlovo = this.NA_U2[this.counter].sj;
      this.zkouseneSlovoPreklad = this.NA_U2[this.counter].cj;
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
      this.zkouseneSlovo = this.NA_U2[this.counter - 1].sj;
      this.zkouseneSlovoPreklad = this.NA_U2[this.counter - 1].cj;
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
