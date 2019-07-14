import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0375Component } from './page0375.component';

@NgModule({
  declarations: [Page0375Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0375Component }])],
  exports: [Page0375Component]
})
export class Page0375Module {}
