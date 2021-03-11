import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoameComponent } from './foame.component';

describe('FoameComponent', () => {
  let component: FoameComponent;
  let fixture: ComponentFixture<FoameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoameComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
