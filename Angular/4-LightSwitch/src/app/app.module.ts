import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SemaphoreModule } from './semaphore/semaphore.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SemaphoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
