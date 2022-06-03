import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemaphoreComponent } from './semaphore.component';

@NgModule({
  declarations: [SemaphoreComponent],
  imports: [CommonModule],
  exports: [SemaphoreComponent],
})
export class SemaphoreModule {}
