import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BAsideMenuComponent } from './b-aside-menu.component';

describe('BAsideMenuComponent', () => {
  let component: BAsideMenuComponent;
  let fixture: ComponentFixture<BAsideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BAsideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BAsideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
