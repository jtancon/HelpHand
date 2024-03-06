import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotipoCadComponent } from './logotipo-cad.component';

describe('LogotipoCadComponent', () => {
  let component: LogotipoCadComponent;
  let fixture: ComponentFixture<LogotipoCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogotipoCadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogotipoCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
