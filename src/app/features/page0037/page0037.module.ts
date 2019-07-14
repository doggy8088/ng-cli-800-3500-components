import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0037Component } from './page0037.component';

@NgModule({
  declarations: [Page0037Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0037Component }])],
  exports: [Page0037Component]
})
export class Page0037Module {}
