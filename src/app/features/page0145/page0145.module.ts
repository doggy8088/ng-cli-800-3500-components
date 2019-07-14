import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0145Component } from './page0145.component';

@NgModule({
  declarations: [Page0145Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0145Component }])],
  exports: [Page0145Component]
})
export class Page0145Module {}
