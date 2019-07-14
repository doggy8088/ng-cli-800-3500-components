import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3208Component } from './page3208.component';

@NgModule({
  declarations: [Page3208Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3208Component }])],
  exports: [Page3208Component]
})
export class Page3208Module {}
