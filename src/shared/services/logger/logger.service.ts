import { Injectable } from '@angular/core';

/**
 * Wrapper around the browser's logger to support cross-browser logging.
 * NOTE: This is just for PoC in Angular4 to show a shared service.
 */
@Injectable()
export class LoggerService {

  constructor() { }

  log(...args: any[]) {
    // TODO: Figure out a clean way to wrap the logger.
    console.log.apply(console, args);
  }
}
