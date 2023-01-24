import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeHellComponent } from './subscribe-hell.component';

describe('SubscribeHellComponent', () => {
  let component: SubscribeHellComponent;
  let fixture: ComponentFixture<SubscribeHellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeHellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeHellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
