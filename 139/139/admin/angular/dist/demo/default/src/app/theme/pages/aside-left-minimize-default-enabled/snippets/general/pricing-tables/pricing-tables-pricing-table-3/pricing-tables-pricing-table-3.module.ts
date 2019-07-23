import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PricingTablesPricingTable3Component } from './pricing-tables-pricing-table-3.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { AsideLeftMinimizeDefaultEnabledComponent } from '../../../../aside-left-minimize-default-enabled.component';

const routes: Routes = [
    {
        "path": "",
        "component": AsideLeftMinimizeDefaultEnabledComponent,
        "children": [
            {
                "path": "",
                "component": PricingTablesPricingTable3Component
            }
        ]
    }
];
@NgModule({imports: [
CommonModule,RouterModule.forChild(routes),LayoutModule
],exports: [
RouterModule
],declarations: [
PricingTablesPricingTable3Component
]})
export class PricingTablesPricingTable3Module  {



}