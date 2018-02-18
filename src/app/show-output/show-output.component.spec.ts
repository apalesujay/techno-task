import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOutputComponent } from './show-output.component';

describe('ShowOutputComponent', () => {
  let component: ShowOutputComponent;
  let fixture: ComponentFixture<ShowOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
