import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSupportComponent } from './store-support.component';

describe('StoreSupportComponent', () => {
  let component: StoreSupportComponent;
  let fixture: ComponentFixture<StoreSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
