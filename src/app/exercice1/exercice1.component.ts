import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0;
  // Pour respecter le template html du composant, je crée la variable result
  // on pourrait également appeler {{compteur}} à la place de {{result}} dans le template html
  public result: number;

  constructor() {}

  ngOnInit() {
    this.result = this.compteur;
  }
  incrementer() {
    this.compteur++;
    this.result = this.compteur;
  }
  decrementer() {
    this.compteur--;
    this.result = this.compteur;
  }
}
