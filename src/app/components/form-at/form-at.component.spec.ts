import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAtComponent } from './form-at.component';

describe('FormAtComponent', () => {
  let component: FormAtComponent;
  let fixture: ComponentFixture<FormAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
