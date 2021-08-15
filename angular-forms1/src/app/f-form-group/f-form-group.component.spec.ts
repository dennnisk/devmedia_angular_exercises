import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FFormGroupComponent } from './f-form-group.component';

describe('FFormGroupComponent', () => {
  let component: FFormGroupComponent;
  let fixture: ComponentFixture<FFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
