import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  @Input()
  gameCover: String = "";
  @Input()
  gameLabel: String = "";
  @Input()
  gameType: String = "";
  @Input()
  gamePrice: String = "";

  constructor() {

  }

  ngOnInit(): void {

  }
}
