import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerComponent } from './controller/controller.component';
import { LightSwitchComponent } from './light-switch.component';

@NgModule({
  declarations: [ControllerComponent, LightSwitchComponent],
  imports: [CommonModule],
  exports: [LightSwitchComponent],
})
export class LightSwitchModule {}
