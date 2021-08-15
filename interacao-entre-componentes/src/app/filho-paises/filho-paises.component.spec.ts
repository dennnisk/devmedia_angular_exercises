import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoPaisesComponent } from './filho-paises.component';

describe('FilhoPaisesComponent', () => {
  let component: FilhoPaisesComponent;
  let fixture: ComponentFixture<FilhoPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilhoPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhoPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
