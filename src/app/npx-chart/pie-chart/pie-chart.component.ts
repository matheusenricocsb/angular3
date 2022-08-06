import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";
import { Carteira } from 'src/app/home/carteira';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit{

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  entradas: number = 0
  saidas: number = 0
  qtd: number = this.entradas - this.saidas
  valores: Carteira[] = [];

  constructor() {
    this.chartOptions = {
      series: [0, 0],
      chart: {
        width: 520,
        type: "pie"
      },
      labels: ["Entrada", "Saída", "Quantidade"],
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: {
              width: 430
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(){
    this.populateChart()

    setInterval(() => {
      this.populateChart()
    }, 5000)
  }

  populateChart(){
    
    this.valores = JSON.parse(localStorage.getItem("carteira"))

    console.log(this.valores)

    if(this.valores != null){
      this.entradas = 0
      this.saidas = 0
      this.qtd = this.entradas - this.saidas
      for(let i in this.valores){
        if(this.valores[i].caixa === 'Entrada'){
          this.entradas = this.entradas + this.valores[i].valor
          this.qtd = this.entradas - this.saidas
        }else{
          this.saidas = this.saidas + this.valores[i].valor
          this.qtd = this.entradas - this.saidas
        }
      }
  
      this.chartOptions.series = [this.entradas, this.saidas, this.qtd]
    }
    
  }
}
