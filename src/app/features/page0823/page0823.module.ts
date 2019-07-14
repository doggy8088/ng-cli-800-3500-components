import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0823Component } from './page0823.component';

@NgModule({
  declarations: [Page0823Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0823Component }])],
  exports: [Page0823Component]
})
export class Page0823Module {}
