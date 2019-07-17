import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeawaysComponent } from './takeaways.component';

describe('TakeawaysComponent', () => {
  let component: TakeawaysComponent;
  let fixture: ComponentFixture<TakeawaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeawaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeawaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
