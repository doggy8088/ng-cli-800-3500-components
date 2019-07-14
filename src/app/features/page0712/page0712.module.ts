import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0712Component } from './page0712.component';

@NgModule({
  declarations: [Page0712Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0712Component }])],
  exports: [Page0712Component]
})
export class Page0712Module {}
