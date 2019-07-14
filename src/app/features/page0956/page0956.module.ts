import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0956Component } from './page0956.component';

@NgModule({
  declarations: [Page0956Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0956Component }])],
  exports: [Page0956Component]
})
export class Page0956Module {}
