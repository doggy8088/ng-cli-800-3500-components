import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0547Component } from './page0547.component';

@NgModule({
  declarations: [Page0547Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0547Component }])],
  exports: [Page0547Component]
})
export class Page0547Module {}
