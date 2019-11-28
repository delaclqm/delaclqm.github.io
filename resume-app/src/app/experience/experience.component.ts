import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  accordionPanelContents: AccordionPanel[];

  constructor() { }

  ngOnInit() {

    // Create contents
    this.accordionPanelContents = [
      {
        title: 'Programming Languages',
        icon: 'code',
        technologies: [
          {
            logo: 'assets/icons/html5/html5-original.svg',
            name: 'HTML5'
          }
        ]
      }
    ]

  }
}

interface Technolgies {
  logo: string,
  name: string
}

interface AccordionPanel {
  title: string,
  icon: string,
  technologies: Technolgies[]
};
