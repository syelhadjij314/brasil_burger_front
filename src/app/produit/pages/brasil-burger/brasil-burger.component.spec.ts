import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasilBurgerComponent } from './brasil-burger.component';

describe('BrasilBurgerComponent', () => {
  let component: BrasilBurgerComponent;
  let fixture: ComponentFixture<BrasilBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrasilBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasilBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
