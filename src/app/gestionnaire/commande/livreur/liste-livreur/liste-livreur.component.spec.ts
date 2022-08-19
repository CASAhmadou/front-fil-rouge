import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLivreurComponent } from './liste-livreur.component';

describe('ListeLivreurComponent', () => {
  let component: ListeLivreurComponent;
  let fixture: ComponentFixture<ListeLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
