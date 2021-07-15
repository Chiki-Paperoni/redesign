import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsUaComponent } from './terms-ua.component';

describe('TermsUaComponent', () => {
  let component: TermsUaComponent;
  let fixture: ComponentFixture<TermsUaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsUaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
