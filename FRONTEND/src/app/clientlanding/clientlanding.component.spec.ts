import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientlandingComponent } from './clientlanding.component';

describe('ClientlandingComponent', () => {
  let component: ClientlandingComponent;
  let fixture: ComponentFixture<ClientlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
