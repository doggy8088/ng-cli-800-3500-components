import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0377Component } from './page0377.component';

@NgModule({
  declarations: [Page0377Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0377Component }])],
  exports: [Page0377Component]
})
export class Page0377Module {}
