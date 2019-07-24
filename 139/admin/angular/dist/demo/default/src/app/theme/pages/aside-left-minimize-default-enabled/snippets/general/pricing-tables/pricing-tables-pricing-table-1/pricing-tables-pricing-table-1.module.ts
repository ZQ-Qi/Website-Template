import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PricingTablesPricingTable1Component } from './pricing-tables-pricing-table-1.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { AsideLeftMinimizeDefaultEnabledComponent } from '../../../../aside-left-minimize-default-enabled.component';

const routes: Routes = [
    {
        "path": "",
        "component": AsideLeftMinimizeDefaultEnabledComponent,
        "children": [
            {
                "path": "",
                "component": PricingTablesPricingTable1Component
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
PricingTablesPricingTable1Component
]})
export class PricingTablesPricingTable1Module  {



}