import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaurGameComponent } from './dinosaur-game.component';

describe('DinosaurGameComponent', () => {
  let component: DinosaurGameComponent;
  let fixture: ComponentFixture<DinosaurGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaurGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaurGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
