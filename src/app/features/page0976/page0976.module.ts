import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0976Component } from './page0976.component';

@NgModule({
  declarations: [Page0976Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0976Component }])],
  exports: [Page0976Component]
})
export class Page0976Module {}
