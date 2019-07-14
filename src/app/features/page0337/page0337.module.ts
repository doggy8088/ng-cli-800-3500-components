import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0337Component } from './page0337.component';

@NgModule({
  declarations: [Page0337Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0337Component }])],
  exports: [Page0337Component]
})
export class Page0337Module {}
