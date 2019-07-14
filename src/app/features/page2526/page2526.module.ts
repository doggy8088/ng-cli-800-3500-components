import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2526Component } from './page2526.component';

@NgModule({
  declarations: [Page2526Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2526Component }])],
  exports: [Page2526Component]
})
export class Page2526Module {}
