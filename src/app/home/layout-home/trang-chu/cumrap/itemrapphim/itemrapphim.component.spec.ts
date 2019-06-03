import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemrapphimComponent } from './itemrapphim.component';

describe('ItemrapphimComponent', () => {
  let component: ItemrapphimComponent;
  let fixture: ComponentFixture<ItemrapphimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemrapphimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemrapphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
