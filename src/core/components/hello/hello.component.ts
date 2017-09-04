import { Component, Input } from '@angular/core';

import { LoggerService } from '../../../shared/services/logger/logger.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  @Input() value: boolean;
  @Input() title: string = 'default';

  constructor(private logger: LoggerService) {
  }

  ngOnInit() {
    this.log(`Boolean value of 'value' is {}`, this.value);
    this.log(`String value of 'title' is {}`, this.title);
  }

  /**
   * Pass any logging to the LoggingService
   */
  log(...args:any[]) {
    this.logger.log.apply(this, args);
  }
}
