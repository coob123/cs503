import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromblemListComponent } from './promblem-list.component';

describe('PromblemListComponent', () => {
  let component: PromblemListComponent;
  let fixture: ComponentFixture<PromblemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromblemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromblemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
