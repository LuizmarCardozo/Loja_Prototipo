import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstarVermelhoComponent } from './allstar-vermelho.component';

describe('AllstarVermelhoComponent', () => {
  let component: AllstarVermelhoComponent;
  let fixture: ComponentFixture<AllstarVermelhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllstarVermelhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstarVermelhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
