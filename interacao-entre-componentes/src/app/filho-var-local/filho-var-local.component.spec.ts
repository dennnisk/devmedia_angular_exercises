import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoVarLocalComponent } from './filho-var-local.component';

describe('FilhoVarLocalComponent', () => {
  let component: FilhoVarLocalComponent;
  let fixture: ComponentFixture<FilhoVarLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilhoVarLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhoVarLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
