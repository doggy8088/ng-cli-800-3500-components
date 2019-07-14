import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0616Component } from './page0616.component';

@NgModule({
  declarations: [Page0616Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0616Component }])],
  exports: [Page0616Component]
})
export class Page0616Module {}
