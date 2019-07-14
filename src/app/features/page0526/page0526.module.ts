import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0526Component } from './page0526.component';

@NgModule({
  declarations: [Page0526Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0526Component }])],
  exports: [Page0526Component]
})
export class Page0526Module {}
