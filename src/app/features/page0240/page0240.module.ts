import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0240Component } from './page0240.component';

@NgModule({
  declarations: [Page0240Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0240Component }])],
  exports: [Page0240Component]
})
export class Page0240Module {}
