import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranzaComponent } from './branza.component';

describe('BranzaComponent', () => {
  let component: BranzaComponent;
  let fixture: ComponentFixture<BranzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BranzaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
