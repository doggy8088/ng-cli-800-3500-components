import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0936Component } from './page0936.component';

@NgModule({
  declarations: [Page0936Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0936Component }])],
  exports: [Page0936Component]
})
export class Page0936Module {}
