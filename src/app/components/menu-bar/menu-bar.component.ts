import { Component, OnInit } from '@angular/core';
import { contactList } from 'src/app/data/socialContactList';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit{
  contacts: String[][] = [];

  ngOnInit(): void {
      this.contacts = contactList.map(contact => {
        return contact.split(" - ");
      });
  }
}
