import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0684Component } from './page0684.component';

@NgModule({
  declarations: [Page0684Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0684Component }])],
  exports: [Page0684Component]
})
export class Page0684Module {}
