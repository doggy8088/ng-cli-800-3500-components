import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0893Component } from './page0893.component';

@NgModule({
  declarations: [Page0893Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0893Component }])],
  exports: [Page0893Component]
})
export class Page0893Module {}
