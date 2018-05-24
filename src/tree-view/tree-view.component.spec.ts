import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2TreeViewComponent } from './tree-view.component';

describe('Ng2TreeViewComponent', () => {
  let component: Ng2TreeViewComponent;
  let fixture: ComponentFixture<Ng2TreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2TreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2TreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
