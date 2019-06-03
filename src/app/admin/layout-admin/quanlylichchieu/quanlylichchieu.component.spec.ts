import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlylichchieuComponent } from './quanlylichchieu.component';

describe('QuanlylichchieuComponent', () => {
  let component: QuanlylichchieuComponent;
  let fixture: ComponentFixture<QuanlylichchieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlylichchieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlylichchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
