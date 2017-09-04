import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    HelloComponent,
  ],
  exports: [HelloComponent],
})
export class CoreModule { }
