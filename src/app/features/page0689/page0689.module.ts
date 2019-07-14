import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0689Component } from './page0689.component';

@NgModule({
  declarations: [Page0689Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0689Component }])],
  exports: [Page0689Component]
})
export class Page0689Module {}
