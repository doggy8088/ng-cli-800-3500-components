import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0372Component } from './page0372.component';

@NgModule({
  declarations: [Page0372Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0372Component }])],
  exports: [Page0372Component]
})
export class Page0372Module {}
