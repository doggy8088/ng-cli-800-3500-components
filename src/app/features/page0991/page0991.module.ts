import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0991Component } from './page0991.component';

@NgModule({
  declarations: [Page0991Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0991Component }])],
  exports: [Page0991Component]
})
export class Page0991Module {}
