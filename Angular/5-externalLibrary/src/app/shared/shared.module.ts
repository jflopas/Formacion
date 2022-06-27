import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PrimengModule } from './primeng/primeng.module';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { LineChartComponent } from '../line-chart/line-chart.component';

@NgModule({
  declarations: [MenuComponent, BarChartComponent, LineChartComponent],
  imports: [CommonModule, RouterModule, PrimengModule],
  exports: [MenuComponent, PrimengModule],
})
export class SharedModule {}
