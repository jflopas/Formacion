import { Component, OnInit } from '@angular/core';
import { Character } from '../interface/character';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styles: [],
})
export class LineChartComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  charactersName: string[] = [];
  numberEpisodes: number[] = [];

  constructor(private data: ApiService) {}

  ngOnInit(): void {
    this.data.getCharacters().subscribe((item) => {
      characters(item, this.charactersName, this.numberEpisodes);
      this.basicData = {
        labels: this.charactersName,
        datasets: [
          {
            label: 'Episodes number',
            data: this.numberEpisodes,
            fill: true,
            borderColor: '#ef476f',
            backgroundColor: '#ef476e48',
          },
        ],
      };
    });

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
        y: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
      },
    };
  }
}

function characters(character: Character[], name: string[], numEp: number[]) {
  character.forEach((item) => {
    name.push(item.name);
    numEp.push(item.episode.length);
  });
}
