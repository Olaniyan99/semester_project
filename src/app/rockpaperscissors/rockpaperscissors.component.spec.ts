import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockpaperscissorsComponent } from './rockpaperscissors.component';

describe('RockpaperscissorsComponent', () => {
  let component: RockpaperscissorsComponent;
  let fixture: ComponentFixture<RockpaperscissorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockpaperscissorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockpaperscissorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
