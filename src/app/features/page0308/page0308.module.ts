import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0308Component } from './page0308.component';

@NgModule({
  declarations: [Page0308Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0308Component }])],
  exports: [Page0308Component]
})
export class Page0308Module {}
