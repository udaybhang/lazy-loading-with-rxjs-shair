import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassActiveComponent } from './class-active.component';

describe('ClassActiveComponent', () => {
  let component: ClassActiveComponent;
  let fixture: ComponentFixture<ClassActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
