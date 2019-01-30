import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../../store/reducers';
import { BListItemsComponent } from './b-list-items.component';

describe('BListItemsComponent', () => {
  let component: BListItemsComponent;
  let fixture: ComponentFixture<BListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, StoreModule.forRoot(reducers, { metaReducers }) ],
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
