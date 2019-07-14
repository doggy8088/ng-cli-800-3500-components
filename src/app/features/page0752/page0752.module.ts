import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0752Component } from './page0752.component';

@NgModule({
  declarations: [Page0752Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0752Component }])],
  exports: [Page0752Component]
})
export class Page0752Module {}
