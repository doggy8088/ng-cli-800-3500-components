import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0289Component } from './page0289.component';

@NgModule({
  declarations: [Page0289Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0289Component }])],
  exports: [Page0289Component]
})
export class Page0289Module {}
