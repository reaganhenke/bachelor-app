import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachelorCardComponent } from './bachelor-card.component';

describe('BachelorCardComponent', () => {
  let component: BachelorCardComponent;
  let fixture: ComponentFixture<BachelorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BachelorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BachelorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
