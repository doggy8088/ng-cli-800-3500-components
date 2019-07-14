import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1526Component } from './page1526.component';

@NgModule({
  declarations: [Page1526Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1526Component }])],
  exports: [Page1526Component]
})
export class Page1526Module {}
