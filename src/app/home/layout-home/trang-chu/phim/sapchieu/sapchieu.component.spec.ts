import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapchieuComponent } from './sapchieu.component';

describe('SapchieuComponent', () => {
  let component: SapchieuComponent;
  let fixture: ComponentFixture<SapchieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapchieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
