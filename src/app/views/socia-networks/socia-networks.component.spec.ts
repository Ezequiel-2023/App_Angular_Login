import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociaNetworksComponent } from './socia-networks.component';

describe('SociaNetworksComponent', () => {
  let component: SociaNetworksComponent;
  let fixture: ComponentFixture<SociaNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SociaNetworksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SociaNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
