import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { navLinks } from '../links';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  // animations: [
  //   trigger(
  //     'inOutAnimation', 
  //     [
  //       transition(
  //         ':enter', 
  //         [
  //           style({ opacity: 0 }),
  //           animate('0.5s ease-out', 
  //                   style({ opacity: 1 }))
  //         ]
  //       ),
  //       transition(
  //         ':leave', 
  //         [
  //           style({ opacity: 1 }),
  //           animate('0.5s ease-in', 
  //                   style({ opacity: 0 }))
  //         ]
  //       )
  //     ]
  //   )
  // ]
})
export class NavComponent implements OnInit {
  
  navLinks: any = navLinks;
  showText: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
