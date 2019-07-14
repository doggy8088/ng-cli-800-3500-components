import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0656Component } from './page0656.component';

@NgModule({
  declarations: [Page0656Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0656Component }])],
  exports: [Page0656Component]
})
export class Page0656Module {}
