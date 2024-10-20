import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComp1Component } from './web-comp1.component';

describe('WebComp1Component', () => {
  let component: WebComp1Component;
  let fixture: ComponentFixture<WebComp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebComp1Component]
    });
    fixture = TestBed.createComponent(WebComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
