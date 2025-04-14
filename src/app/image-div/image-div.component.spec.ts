import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDivComponent } from './image-div.component';

describe('ImageDivComponent', () => {
  let component: ImageDivComponent;
  let fixture: ComponentFixture<ImageDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
