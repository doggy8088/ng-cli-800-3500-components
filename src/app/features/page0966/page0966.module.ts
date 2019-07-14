import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0966Component } from './page0966.component';

@NgModule({
  declarations: [Page0966Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0966Component }])],
  exports: [Page0966Component]
})
export class Page0966Module {}
