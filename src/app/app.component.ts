import { Component, OnInit } from '@angular/core';
import { NuevaAventuraU1 } from './NuevaAventuraU1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'grid-in-angular';
  NA_U1 = NuevaAventuraU1;

  counter: number = 0;
  zkouseneSlovo = this.NA_U1[this.counter].sj;
  zkouseneSlovoPreklad = this.NA_U1[this.counter].cj;
  prekladSlova = this.nextWord();
  showTranslation: boolean = false;
  buttonName: string = 'Show';
  posledniSlovo: boolean = false;
  correctAnswer: number = 0;
  maxLength = this.NA_U1.length;

  spravnaOdpoved(): number {
    return this.correctAnswer++;
  }

  showResult() {
    console.log(this.spravnaOdpoved());
  }

  nextWord(): void {
    this.maxLength = this.NA_U1.length;
    console.log('úPLNĚ Na začátku' + this.counter);
    if (this.counter == this.maxLength) {
      this.posledniSlovo = !this.posledniSlovo;
    } else {
      this.zkouseneSlovo = this.NA_U1[this.counter].sj;
      this.zkouseneSlovoPreklad = this.NA_U1[this.counter].cj;
      this.counter = this.counter + 1;
      console.log('Slovo číslo ' + this.counter);
      console.log(this.maxLength);
    }

    /*     if (maxLength == this.counter) {
      this.posledniSlovo = !this.posledniSlovo;

    } */

    const showTranslation = (this.showTranslation = true);
    this.toggle();
  }

  previousWord() {
    if (this.counter > 1) {
      this.counter = this.counter - 1;
      this.zkouseneSlovo = this.NA_U1[this.counter - 1].sj;
      this.zkouseneSlovoPreklad = this.NA_U1[this.counter - 1].cj;
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
