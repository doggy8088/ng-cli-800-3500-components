import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0642Component } from './page0642.component';

@NgModule({
  declarations: [Page0642Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0642Component }])],
  exports: [Page0642Component]
})
export class Page0642Module {}
