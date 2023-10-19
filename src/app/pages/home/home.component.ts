import { Component, OnInit } from '@angular/core';
import IGameSchema from 'src/app/components/Schema/gameSchema';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gameList: IGameSchema[] = [];

  ngOnInit(): void {
    this.gameList = fakeData;
  }
}
