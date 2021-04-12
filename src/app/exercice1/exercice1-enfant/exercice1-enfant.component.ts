import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur!: number;
  @Output() private setIncrement: EventEmitter<number> = new EventEmitter();
  @Output() private setDecrement: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public decrementer(compteur: number) {
    this.setDecrement.emit(compteur);
  }
  public incrementer(compteur: number) {
    this.setIncrement.emit(compteur);
  }
}
