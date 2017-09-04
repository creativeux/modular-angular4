import { TestBed, async, inject, tick } from '@angular/core/testing';

import { HelloComponent } from './hello.component';

import { LoggerService } from '../../../shared/services/logger/logger.service';


// Mock logger that does nothing.
class MockLoggerService {
  log(...args) {
    return;
  }
}


describe('HelloComponent', () => {
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HelloComponent,
      ],
      providers: [
        { provide: LoggerService, useClass: MockLoggerService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a default title of 'default'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('default');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to default!');
  }));
});
