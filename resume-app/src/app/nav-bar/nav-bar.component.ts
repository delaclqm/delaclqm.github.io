import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { navLinks } from '../links';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();
  navLinks: any[] = navLinks;

  constructor() { }

  ngOnInit() { }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}