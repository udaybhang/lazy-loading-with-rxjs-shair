import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynemicClassComponent } from './dynemic-class.component';

describe('DynemicClassComponent', () => {
  let component: DynemicClassComponent;
  let fixture: ComponentFixture<DynemicClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynemicClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynemicClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
