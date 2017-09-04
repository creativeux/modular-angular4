import { Component } from '@angular/core';

import { HelloComponent } from '../core/components/hello/hello.component';

@Component({
  selector: 'app-root',
  template: '<hello [title]="title" [value]="doSomething()"></hello>',
})
export class AppComponent {
  title = 'app';
  doSomething():boolean {
    return true;
  }
}
