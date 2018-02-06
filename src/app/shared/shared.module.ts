import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations:[
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
        BreadcrumbsComponent

    ],

    exports:[
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
        BreadcrumbsComponent

    ]

})

export class SharedModule{}