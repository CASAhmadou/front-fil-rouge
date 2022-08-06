import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixBoissonComponent } from './choix-boisson.component';

describe('ChoixBoissonComponent', () => {
  let component: ChoixBoissonComponent;
  let fixture: ComponentFixture<ChoixBoissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixBoissonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
