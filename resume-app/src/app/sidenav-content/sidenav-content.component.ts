import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { navLinks } from '../links';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {

  navLinks: any[] = navLinks;
  @Output() sidenavClose = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }

}
