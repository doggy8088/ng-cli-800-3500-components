import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0295Component } from './page0295.component';

@NgModule({
  declarations: [Page0295Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0295Component }])],
  exports: [Page0295Component]
})
export class Page0295Module {}
