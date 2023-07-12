import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominicodeComponent } from './dominicode.component';

describe('DominicodeComponent', () => {
  let component: DominicodeComponent;
  let fixture: ComponentFixture<DominicodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DominicodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DominicodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
