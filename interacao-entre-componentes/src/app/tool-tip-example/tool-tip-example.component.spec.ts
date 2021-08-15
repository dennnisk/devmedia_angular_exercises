import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTipExampleComponent } from './tool-tip-example.component';

describe('ToolTipExampleComponent', () => {
  let component: ToolTipExampleComponent;
  let fixture: ComponentFixture<ToolTipExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolTipExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTipExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
