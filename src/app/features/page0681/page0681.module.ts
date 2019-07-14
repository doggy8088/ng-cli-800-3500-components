import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0681Component } from './page0681.component';

@NgModule({
  declarations: [Page0681Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0681Component }])],
  exports: [Page0681Component]
})
export class Page0681Module {}
