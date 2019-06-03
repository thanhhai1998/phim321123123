import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangchieuComponent } from './dangchieu.component';

describe('DangchieuComponent', () => {
  let component: DangchieuComponent;
  let fixture: ComponentFixture<DangchieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangchieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
