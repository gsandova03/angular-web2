import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarLayoutComponent } from './navbar-layout/navbar-layout.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarLayoutComponent,
    SliderComponent
  ],
  exports :[
    NavbarLayoutComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
