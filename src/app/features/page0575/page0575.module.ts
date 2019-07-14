import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0575Component } from './page0575.component';

@NgModule({
  declarations: [Page0575Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0575Component }])],
  exports: [Page0575Component]
})
export class Page0575Module {}
