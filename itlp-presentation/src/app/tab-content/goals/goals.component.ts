import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  @Input() animationDuration: number;

  constructor() { }

  ngOnInit() {
    this.animationDuration = 1000;
  }

}
