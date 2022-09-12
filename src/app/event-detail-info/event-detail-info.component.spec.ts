import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailInfoComponent } from './event-detail-info.component';

describe('EventDetailInfoComponent', () => {
  let component: EventDetailInfoComponent;
  let fixture: ComponentFixture<EventDetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
