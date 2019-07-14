import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2812Component } from './page2812.component';

@NgModule({
  declarations: [Page2812Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2812Component }])],
  exports: [Page2812Component]
})
export class Page2812Module {}
