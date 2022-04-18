import { Component, OnInit } from '@angular/core';
import { NuevaAventuraU1 } from '../data/NuevaAventura1';

@Component({
  selector: 'app-vsechny-lekce',
  templateUrl: './vsechny-lekce.component.html',
  styleUrls: ['./vsechny-lekce.component.css']
})
export class VsechnyLekceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  vsechnyLekce = NuevaAventuraU1;

}
