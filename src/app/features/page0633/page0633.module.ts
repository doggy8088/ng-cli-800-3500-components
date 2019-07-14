import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0633Component } from './page0633.component';

@NgModule({
  declarations: [Page0633Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0633Component }])],
  exports: [Page0633Component]
})
export class Page0633Module {}
