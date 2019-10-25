import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-accordion',
  templateUrl: './experience-accordion.component.html',
  styleUrls: ['./experience-accordion.component.css']
})
export class ExperienceAccordionComponent implements OnInit {

  // Create contents of the accordion
  accordionPanelContents: AccordionPanel[] = [
    {
      title: 'Programming Languages',
      icon: 'code',
      technologies: [
        {
          logo: 'assets/icons/html5/html5-original.svg',
          name: 'HTML5'
        },
        {
          logo: 'assets/icons/css3/css3-original.svg',
          name: 'CSS3'
        },
        {
          logo: 'assets/icons/xaml/xaml-logo.png',
          name: 'XAML'
        },
        {
          logo: 'assets/icons/dax/dax_logo.png',
          name: 'DAX'
        },
        {
          logo: 'assets/icons/sql/sql-logo.png',
          name: 'SQL'
        },
        {
          logo: 'assets/icons/csharp/csharp-original.svg',
          name: 'C#'
        },
        {
          logo: 'assets/icons/java/java-original.svg',
          name: 'Java'
        },
        {
          logo: 'assets/icons/javascript/javascript-original.svg',
          name: 'JavaScript'
        },
        {
          logo: 'assets/icons/jquery/jquery-original.svg',
          name: 'jQuery'
        },
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
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

