import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
    
  graficos: any ={
    'graficos1':{
      'labels':['Con Frijoles', 'con Natilla', 'Con tocino'],
      'data': [24,30,46],
      'type': 'doughnut',
      'leyenda':'el pan se como con'
    },

    'graficos2': {
      'labels': ['hombres', 'mujeres'],
      'data': [4500,6000],
      'type': 'doughnut',
      'leyenda': '¿le dan gases los frijoles?'
    },
    'graficos3': {
      'labels': ['si', 'no'],
      'data': [95, 5],
      'type': 'doughnut',
      'leyenda': 'entrevistados'
    },

    'graficos4': {
      'labels': ['no', 'si'],
      'data': [85, 15],
      'type': 'doughnut',
      'leyenda': '¿le importa que le den gases?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

  

}
