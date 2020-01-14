import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttributeDemoComponent } from './custom-attribute-demo.component';

describe('CustomAttributeDemoComponent', () => {
  let component: CustomAttributeDemoComponent;
  let fixture: ComponentFixture<CustomAttributeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAttributeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAttributeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
