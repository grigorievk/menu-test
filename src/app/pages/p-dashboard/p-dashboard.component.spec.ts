import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../../store/reducers';

import { PDashboardComponent } from './p-dashboard.component';
import { BHeaderComponent } from '../../blocks/b-header/b-header.component';
import { BAsideMenuComponent } from '../../blocks/b-aside-menu/b-aside-menu.component';
import { BListItemsComponent } from '../../blocks/b-list-items/b-list-items.component';

describe('PDashboardComponent', () => {
  let component: PDashboardComponent;
  let fixture: ComponentFixture<PDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, StoreModule.forRoot(reducers, { metaReducers }) ],
      declarations: [ PDashboardComponent, BHeaderComponent, BAsideMenuComponent, BListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
