import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PNotfoundComponent } from './p-notfound.component';

describe('PNotfoundComponent', () => {
  let component: PNotfoundComponent;
  let fixture: ComponentFixture<PNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
