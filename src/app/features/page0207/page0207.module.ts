import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0207Component } from './page0207.component';

@NgModule({
  declarations: [Page0207Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0207Component }])],
  exports: [Page0207Component]
})
export class Page0207Module {}
