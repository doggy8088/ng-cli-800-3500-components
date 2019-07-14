import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0915Component } from './page0915.component';

@NgModule({
  declarations: [Page0915Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0915Component }])],
  exports: [Page0915Component]
})
export class Page0915Module {}
