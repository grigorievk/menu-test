import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../../store/reducers';
import { BHeaderComponent } from './b-header.component';
//import {AppComponent} from '../../app.component';

describe('BHeaderComponent', () => {
  let component: BHeaderComponent;
  let fixture: ComponentFixture<BHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  StoreModule.forRoot(reducers, { metaReducers }) ],
      declarations: [ BHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
