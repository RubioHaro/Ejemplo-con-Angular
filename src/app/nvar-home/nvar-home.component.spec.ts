import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvarHomeComponent } from './nvar-home.component';

describe('NvarHomeComponent', () => {
  let component: NvarHomeComponent;
  let fixture: ComponentFixture<NvarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvarHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
