import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BListItemsComponent } from './b-list-items.component';

describe('BListItemsComponent', () => {
  let component: BListItemsComponent;
  let fixture: ComponentFixture<BListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
