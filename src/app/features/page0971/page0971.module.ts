import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0971Component } from './page0971.component';

@NgModule({
  declarations: [Page0971Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0971Component }])],
  exports: [Page0971Component]
})
export class Page0971Module {}
