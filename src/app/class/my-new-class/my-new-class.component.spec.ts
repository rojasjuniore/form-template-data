import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewClassComponent } from './my-new-class.component';

describe('MyNewClassComponent', () => {
  let component: MyNewClassComponent;
  let fixture: ComponentFixture<MyNewClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
