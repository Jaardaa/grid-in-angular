import { Component, OnInit } from '@angular/core';
import { PripravDataService } from '../services/priprav-data.service';
import { VsechnyLekce, JednaLekce } from '../data/NuevaAventura1';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NoButtonComponent } from '../buttons/no-button/no-button.component';

@Component({
  selector: 'app-sandbox3',
  templateUrl: './sandbox3.component.html',
  styleUrls: ['./sandbox3.component.css', '../app.component.css'],
})
export class Sandbox3Component implements OnInit {
  ajdi!: number;

  oneLesson$!: Observable<JednaLekce>;

  constructor(
    private pripravDataService: PripravDataService,
    private _Activatedroute: ActivatedRoute,
    private _router: Router
  ) {}

  vsechnyLekce: VsechnyLekce[] =
    this.pripravDataService.pripravDataVsechLekci();

  id = this._Activatedroute.snapshot.paramMap.get('id');
  indexNumber = Number(this.id) - 1;
  jednaLekce: JednaLekce = this.pripravDataService.pripravDataJedneLekce(
    this.indexNumber
  );

  ngOnInit(): void {
/* this._Activatedroute.params.subscribe((params) => {
      console.log(params);
      console.log(this.vsechnyLekce);
      console.log(this.jednaLekce.slovicka[5].cj);

      this.ajdi = Number(params['id']);
      console.log(this.ajdi);
      console.log(typeof this.ajdi);
      console.log(this.pripravDataService.pripravDataJedneLekce(this.ajdi));
    }); */

    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
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
    if (this.counter == this.maxLength) {
      this.posledniSlovo = !this.posledniSlovo;
    } else {
      this.zkouseneSlovo = this.jednaLekce.slovicka[this.counter].sj;
      this.zkouseneSlovoPreklad = this.jednaLekce.slovicka[this.counter].cj;
      this.counter = this.counter + 1;
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
