import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusDatveComponent } from './status-datve.component';

describe('StatusDatveComponent', () => {
  let component: StatusDatveComponent;
  let fixture: ComponentFixture<StatusDatveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusDatveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusDatveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
