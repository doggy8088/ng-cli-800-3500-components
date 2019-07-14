import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0898Component } from './page0898.component';

@NgModule({
  declarations: [Page0898Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0898Component }])],
  exports: [Page0898Component]
})
export class Page0898Module {}
