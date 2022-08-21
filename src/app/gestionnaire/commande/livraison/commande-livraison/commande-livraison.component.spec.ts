import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeLivraisonComponent } from './commande-livraison.component';

describe('CommandeLivraisonComponent', () => {
  let component: CommandeLivraisonComponent;
  let fixture: ComponentFixture<CommandeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
