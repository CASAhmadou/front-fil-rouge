import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompterComponent } from './compter.component';

describe('CompterComponent', () => {
  let component: CompterComponent;
  let fixture: ComponentFixture<CompterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
