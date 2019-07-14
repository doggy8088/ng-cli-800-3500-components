import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0630Component } from './page0630.component';

@NgModule({
  declarations: [Page0630Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0630Component }])],
  exports: [Page0630Component]
})
export class Page0630Module {}
