import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstarPretoComponent } from './allstar-preto.component';

describe('AllstarPretoComponent', () => {
  let component: AllstarPretoComponent;
  let fixture: ComponentFixture<AllstarPretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllstarPretoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstarPretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
