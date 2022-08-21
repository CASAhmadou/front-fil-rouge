import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLivraisonComponent } from './liste-livraison.component';

describe('ListeLivraisonComponent', () => {
  let component: ListeLivraisonComponent;
  let fixture: ComponentFixture<ListeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
