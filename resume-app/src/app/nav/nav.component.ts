import { Component, OnInit } from '@angular/core';
import { navLinks } from '../links';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  navLinks: any = navLinks;
  showText: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
