import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoViewChildComponent } from './filho-view-child.component';

describe('FilhoViewChildComponent', () => {
  let component: FilhoViewChildComponent;
  let fixture: ComponentFixture<FilhoViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilhoViewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhoViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
