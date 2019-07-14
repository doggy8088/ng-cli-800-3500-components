import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0268Component } from './page0268.component';

@NgModule({
  declarations: [Page0268Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0268Component }])],
  exports: [Page0268Component]
})
export class Page0268Module {}
