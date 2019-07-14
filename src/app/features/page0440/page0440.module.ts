import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0440Component } from './page0440.component';

@NgModule({
  declarations: [Page0440Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0440Component }])],
  exports: [Page0440Component]
})
export class Page0440Module {}
