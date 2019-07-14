import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0810Component } from './page0810.component';

@NgModule({
  declarations: [Page0810Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0810Component }])],
  exports: [Page0810Component]
})
export class Page0810Module {}
