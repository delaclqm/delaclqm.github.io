import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @Input() animationDuration: number;

  constructor() { }

  ngOnInit() { 
    // Set all the options
    this.animationDuration = 1000;
  }
}
