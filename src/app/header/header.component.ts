import { Component, OnInit } from '@angular/core';
import { NAVITEMS } from '../data/navItems';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  navItems =  NAVITEMS;
  toggleClass: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavItems() {
    console.log('toggled :::',this.toggleClass)
    !!this.toggleClass
    console.log('toggled :::',this.toggleClass)
  }
}
