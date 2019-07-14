import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0996Component } from './page0996.component';

@NgModule({
  declarations: [Page0996Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0996Component }])],
  exports: [Page0996Component]
})
export class Page0996Module {}
