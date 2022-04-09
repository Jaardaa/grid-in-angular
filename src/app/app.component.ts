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
  buttonName: string = 'Ukaž překlad';
  posledniSlovo: boolean = false;
  correctAnswer: number = 1;
  userObject = {
    fruit: 'apple',
  };

  nextWord() {
    const maxLength = this.NA_U1.length;
    this.zkouseneSlovo = this.NA_U1[this.counter].sj;
    this.zkouseneSlovoPreklad = this.NA_U1[this.counter].cj;
    this.counter = this.counter + 1;
    console.log(this.counter);
    console.log(maxLength);

    if (maxLength == this.counter) {
      this.posledniSlovo = !this.posledniSlovo;
    }

    const showTranslation = (this.showTranslation = true);
    this.toggle();
  }

  anotherRound() {
    this.posledniSlovo = !this.posledniSlovo;
    this.correctAnswer = 0;
    this.counter = 0;
    this.nextWord();
  }

  toggle(): void {
    this.showTranslation = !this.showTranslation;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.showTranslation) this.buttonName = 'Skryj překlad';
    else this.buttonName = 'Ukaž překlad';
  }

  spravnaOdpoved() {
    const spravneSkore: number = this.correctAnswer++;
    console.log('Vím: ' + spravneSkore);
  }
}
