import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementGalleryComponent } from './engagement-gallery.component';

describe('EngagementGalleryComponent', () => {
  let component: EngagementGalleryComponent;
  let fixture: ComponentFixture<EngagementGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
