import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0881Component } from './page0881.component';

@NgModule({
  declarations: [Page0881Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0881Component }])],
  exports: [Page0881Component]
})
export class Page0881Module {}
