import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1306Component } from './page1306.component';

@NgModule({
  declarations: [Page1306Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1306Component }])],
  exports: [Page1306Component]
})
export class Page1306Module {}
