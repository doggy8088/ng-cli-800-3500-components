import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0800Component } from './page0800.component';

@NgModule({
  declarations: [Page0800Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0800Component }])],
  exports: [Page0800Component]
})
export class Page0800Module {}
