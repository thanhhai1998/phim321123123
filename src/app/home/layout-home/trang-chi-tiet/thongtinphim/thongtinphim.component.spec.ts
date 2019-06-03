import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinphimComponent } from './thongtinphim.component';

describe('ThongtinphimComponent', () => {
  let component: ThongtinphimComponent;
  let fixture: ComponentFixture<ThongtinphimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinphimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
