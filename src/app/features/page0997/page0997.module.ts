import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0997Component } from './page0997.component';

@NgModule({
  declarations: [Page0997Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0997Component }])],
  exports: [Page0997Component]
})
export class Page0997Module {}
