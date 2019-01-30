import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PHomeComponent } from './p-home.component';
import { RouterTestingModule } from '@angular/router/testing';
import {AppComponent} from '../../app.component';

describe('PHomeComponent', () => {
  let component: PHomeComponent;
  let fixture: ComponentFixture<PHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          RouterTestingModule
      ],
      declarations: [ PHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(PHomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Summator app!');
  });
});
