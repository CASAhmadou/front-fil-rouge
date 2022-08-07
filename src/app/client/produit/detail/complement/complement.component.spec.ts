import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementComponent } from './complement.component';

describe('ComplementComponent', () => {
  let component: ComplementComponent;
  let fixture: ComponentFixture<ComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
