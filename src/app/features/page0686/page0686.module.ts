import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0686Component } from './page0686.component';

@NgModule({
  declarations: [Page0686Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0686Component }])],
  exports: [Page0686Component]
})
export class Page0686Module {}
