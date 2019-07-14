import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0550Component } from './page0550.component';

@NgModule({
  declarations: [Page0550Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0550Component }])],
  exports: [Page0550Component]
})
export class Page0550Module {}
