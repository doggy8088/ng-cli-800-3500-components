import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0153Component } from './page0153.component';

@NgModule({
  declarations: [Page0153Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0153Component }])],
  exports: [Page0153Component]
})
export class Page0153Module {}
