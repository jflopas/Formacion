import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];
  activeItem!: MenuItem;

  ngOnInit() {
    this.items = [
      {
        label: 'Bar Chart',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: 'barChart',
      },
      {
        label: 'Line Chart',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: 'lineChart',
      },
    ];
    this.activeItem = this.items[0];
  }
}
