import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivalgameComponent } from './trivalgame.component';

describe('TrivalgameComponent', () => {
  let component: TrivalgameComponent;
  let fixture: ComponentFixture<TrivalgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrivalgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrivalgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
