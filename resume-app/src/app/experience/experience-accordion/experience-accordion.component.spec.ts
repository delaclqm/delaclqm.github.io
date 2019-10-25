import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAccordionComponent } from './experience-accordion.component';

describe('ExperienceAccordionComponent', () => {
  let component: ExperienceAccordionComponent;
  let fixture: ComponentFixture<ExperienceAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
