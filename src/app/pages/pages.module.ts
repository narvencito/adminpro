import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';

//n2-charts
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { GraficoDonaComponent } from './../components/grafico-dona/grafico-dona.component';

//temporal

import { IncrementadorComponent } from './../components/incrementador/incrementador.component';


@NgModule({
declarations:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
], 
exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
], 
imports:[
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
]

})

export class PagesModule{}