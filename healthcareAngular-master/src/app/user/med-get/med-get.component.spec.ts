import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedGetComponent } from './med-get.component';

describe('MedGetComponent', () => {
  let component: MedGetComponent;
  let fixture: ComponentFixture<MedGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
