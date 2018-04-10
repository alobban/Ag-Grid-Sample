import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGridComponent } from './second-grid.component';

describe('SecondGridComponent', () => {
  let component: SecondGridComponent;
  let fixture: ComponentFixture<SecondGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
