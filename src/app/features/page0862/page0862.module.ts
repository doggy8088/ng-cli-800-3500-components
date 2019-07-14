import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0862Component } from './page0862.component';

@NgModule({
  declarations: [Page0862Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0862Component }])],
  exports: [Page0862Component]
})
export class Page0862Module {}
