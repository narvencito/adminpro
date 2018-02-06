import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
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