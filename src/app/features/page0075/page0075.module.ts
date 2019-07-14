import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0075Component } from './page0075.component';

@NgModule({
  declarations: [Page0075Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0075Component }])],
  exports: [Page0075Component]
})
export class Page0075Module {}
