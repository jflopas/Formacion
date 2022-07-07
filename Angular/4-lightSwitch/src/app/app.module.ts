import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightSwitchModule } from './light-switch/light-switch.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LightSwitchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
