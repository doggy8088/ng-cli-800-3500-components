import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2645Component } from './page2645.component';

@NgModule({
  declarations: [Page2645Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2645Component }])],
  exports: [Page2645Component]
})
export class Page2645Module {}
