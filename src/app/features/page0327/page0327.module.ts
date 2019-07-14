import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0327Component } from './page0327.component';

@NgModule({
  declarations: [Page0327Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0327Component }])],
  exports: [Page0327Component]
})
export class Page0327Module {}
