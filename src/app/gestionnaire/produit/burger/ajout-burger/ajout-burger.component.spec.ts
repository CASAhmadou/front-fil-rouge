import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBurgerComponent } from './ajout-burger.component';

describe('AjoutBurgerComponent', () => {
  let component: AjoutBurgerComponent;
  let fixture: ComponentFixture<AjoutBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
