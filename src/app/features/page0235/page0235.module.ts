import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0235Component } from './page0235.component';

@NgModule({
  declarations: [Page0235Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0235Component }])],
  exports: [Page0235Component]
})
export class Page0235Module {}
