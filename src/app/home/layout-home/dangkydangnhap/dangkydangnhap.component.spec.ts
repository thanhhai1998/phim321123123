import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkydangnhapComponent } from './dangkydangnhap.component';

describe('DangkydangnhapComponent', () => {
  let component: DangkydangnhapComponent;
  let fixture: ComponentFixture<DangkydangnhapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangkydangnhapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkydangnhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
