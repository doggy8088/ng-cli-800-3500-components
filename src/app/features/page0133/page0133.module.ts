import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0133Component } from './page0133.component';

@NgModule({
  declarations: [Page0133Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0133Component }])],
  exports: [Page0133Component]
})
export class Page0133Module {}
