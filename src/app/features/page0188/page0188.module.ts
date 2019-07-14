import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0188Component } from './page0188.component';

@NgModule({
  declarations: [Page0188Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0188Component }])],
  exports: [Page0188Component]
})
export class Page0188Module {}
