import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0922Component } from './page0922.component';

@NgModule({
  declarations: [Page0922Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0922Component }])],
  exports: [Page0922Component]
})
export class Page0922Module {}
