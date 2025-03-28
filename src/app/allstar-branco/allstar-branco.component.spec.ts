import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstarBrancoComponent } from './allstar-branco.component';

describe('AllstarBrancoComponent', () => {
  let component: AllstarBrancoComponent;
  let fixture: ComponentFixture<AllstarBrancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllstarBrancoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstarBrancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
