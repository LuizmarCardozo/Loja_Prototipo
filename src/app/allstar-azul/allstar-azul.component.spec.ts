import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstarAzulComponent } from './allstar-azul.component';

describe('AllstarAzulComponent', () => {
  let component: AllstarAzulComponent;
  let fixture: ComponentFixture<AllstarAzulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllstarAzulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstarAzulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
