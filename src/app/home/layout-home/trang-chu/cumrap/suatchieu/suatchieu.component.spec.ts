import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuatchieuComponent } from './suatchieu.component';

describe('SuatchieuComponent', () => {
  let component: SuatchieuComponent;
  let fixture: ComponentFixture<SuatchieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuatchieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuatchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
