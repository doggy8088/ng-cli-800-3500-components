import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0006Component } from './page0006.component';

@NgModule({
  declarations: [Page0006Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0006Component }])],
  exports: [Page0006Component]
})
export class Page0006Module {}
