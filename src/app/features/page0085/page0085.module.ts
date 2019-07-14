import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0085Component } from './page0085.component';

@NgModule({
  declarations: [Page0085Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0085Component }])],
  exports: [Page0085Component]
})
export class Page0085Module {}
