import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0439Component } from './page0439.component';

@NgModule({
  declarations: [Page0439Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0439Component }])],
  exports: [Page0439Component]
})
export class Page0439Module {}
