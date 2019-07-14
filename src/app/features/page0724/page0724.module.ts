import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0724Component } from './page0724.component';

@NgModule({
  declarations: [Page0724Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0724Component }])],
  exports: [Page0724Component]
})
export class Page0724Module {}
