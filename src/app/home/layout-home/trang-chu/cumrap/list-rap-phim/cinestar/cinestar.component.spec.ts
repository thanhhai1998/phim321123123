import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinestarComponent } from './cinestar.component';

describe('CinestarComponent', () => {
  let component: CinestarComponent;
  let fixture: ComponentFixture<CinestarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinestarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
