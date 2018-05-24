import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2TreeSelectComponent } from './tree-select.component';

describe('Ng2TreeSelectComponent', () => {
  let component: Ng2TreeSelectComponent;
  let fixture: ComponentFixture<Ng2TreeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2TreeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2TreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
