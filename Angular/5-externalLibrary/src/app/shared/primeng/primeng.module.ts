import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  exports: [ChartModule, TabMenuModule],
})
export class PrimengModule {}
